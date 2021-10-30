const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
const userRoutes = require('./controller/routes/userRoutes');

if (process.env.NODE_ENV != 'production') {
    dotenv.config()
}

// Views configuration
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Port configuration
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(({ extended: true })));

app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
})

//Routes
app.use(userRoutes);

// Definition public files
app.use(express.static(path.join(__dirname+'/views', 'public')));


app.listen(app.get('port'), () => {
    console.log(`The serve starts at http://localhost:${process.env.PORT}`)
});
