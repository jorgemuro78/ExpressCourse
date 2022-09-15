//Server whit Js

// const http = require("http");

// const server = http.createServer((req, res) =>{
//     res.status = 200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("Hello World");
// });

// server.listen(3000, () => {
//     console.log("server on port 3000");
// });

//Server whit Express

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//Global Variables

//Rutes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});

