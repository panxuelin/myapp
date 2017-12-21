var express = require('express');
var router = express.Router();
var login = require('../servers/login');


/* GET home page. */
router.get('/index', function (req, res, next) {
    console.log(req.query);
    console.log(req.session.user);
    if (req.session.user) {
        res.render('./user/index', {phone: '12312312312'})
    }
    else {
        req.session.originalurl = req.originalUrl ? req.originalUrl : null//记录用户的请求路径
        console.log(req.session.originalurl);
        res.redirect('/sz/login/index');
    }
});

module.exports = router;