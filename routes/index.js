var express = require('express');
var router = express.Router();
var path = require('path');
var login = require('../servers/login');


/* GET home page. */
router.get('/index', function (req, res, next) {
    console.log(req.query);
    console.log(__dirname);

    res.render('index/index.html', {title: 'Express'});
});

module.exports = router;
