var express = require('express');
var router = express.Router();
var path = require('path');
var login = require('../servers/login');
const Vue = require('vue');
const fs=require('fs');

/* GET home page. */
router.get('/index', function (req, res, next) {
    console.log(req.query);
    console.log(__dirname);

    // res.render('index/index.html', {title: 'Express'});
    const renderer = require('vue-server-renderer').createRenderer({
        template:fs.readFileSync('./views/index/index.html','utf-8')
    });
    const app = new Vue({
        template: `<div>访问的URL是：{{url}}</div>`,
        data: {
            url: req.url
        }
    });
    const context={
        title:'善诊-父母健康找善诊'
    }
    renderer.renderToString(app,context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
        }
        console.log(html);
        res.end(html);
        // res.end(`
        // <!DOCTYPE html>
        // <html lang="en">
        //     <head>
        //         <title>Hello</title>
        //     </head>
        //     <body>
        //         ${html}
        //     </body>
        // </html>
        // `);
    })

});

module.exports = router;
