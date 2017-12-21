var express = require('express');
var router = express.Router();
var path = require('path');
var login = require('../servers/login');


/* GET home page. */
router.get('/index', function (req, res, next) {
    console.log('start');
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    console.log(req.session.islogin);
    console.log(req.cookies.islogin);
    console.log('this is login');
    res.render('login/index', {title: '登录'});
});

router.get('/login', function (req, res) {
    console.log(req.session.originalUrl);
    //req.session.user=user;//将用户信息写入session
    if (req.session.originalUrl) {
        var redirectUrl = req.session.originalUrl;
        req.session.originalUrl;
    }
    else {//不存在原始请求路径，则将用户重定向到首页路径
        var redirectUrl = '/sz/index/index';
    }
    console.log('yes');
    req.session.user = 'zhangsan';
    req.session.islogin = true;
    res.redirect(redirectUrl);
});

module.exports = router;
