const express = require('express');
const app = express();
const dotenv =require('dotenv')
const morgan = require('morgan');
const path = require('path')
// const bodyparse = require('body-parser')
dotenv.config({path:'config.env'});
const PORT =process.env.PORT || 8080 ;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// log requests
app.use(morgan('tiny'));
// set view engine
app.set('view engine','ejs');

// load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));

// load routers
app.use('/', require('./server/routes/router'))
app.listen(PORT,()=>{console.log(`listen on http://localhost:${PORT}`)});
