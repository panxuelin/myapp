var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
// var multer = require('multer');
var errorHandler = require('errorhandler');
var ejs = require('ejs');


var debug = require('debug')('myapp');
var app = express();

// view engine setup
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
};
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/sz/static', express.static(path.join(__dirname, 'public'), options));


app.use(function (req,res,next) {
    console.log('Time:'+new Date());
    next();
});
/*路由部分*/
var index = require('./routes/index');
var user = require('./routes/user');
var login = require('./routes/login');

app.use('/sz/index', index);
app.use('/sz/user', user);
app.use('/sz/login', login);

//错误处理中间件应当在路由加载之后才能加载
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


/* MySQL 示例*/
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'dbuser',
//     password : 's3kreee7'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

/* MongoDB 示例*/
// var db = require('mongoskin').db('localhost:27017/animals');
//
// db.collection('mamals').find().toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
// });

/*Redis 示例*/
// var client = require('redis').createClient();
//
// client.on('error', function (err) {
//     console.log('Error ' + err);
// });
//
// client.set('string key', 'string val', redis.print);
// client.hset('hash key', 'hashtest 1', 'some value', redis.print);
// client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print);
//
// client.hkeys('hash key', function (err, replies) {
//
//     console.log(replies.length + ' replies:');
//     replies.forEach(function (reply, i) {
//         console.log('    ' + i + ': ' + reply);
//     });
//
//     client.quit();
//
// });



module.exports = app;
