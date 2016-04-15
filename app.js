var express = require('express');
var morgan  = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('dev'));
//加载静态资源
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'style')));
app.use(express.static(path.join(__dirname, 'script')));
app.use(express.static(path.join(__dirname, 'tpl')));

//加载路由
require('./Routes/index')(app);


console.log('in 8080');
app.listen(8080);
