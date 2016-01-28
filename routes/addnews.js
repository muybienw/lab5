/**
 * Created by MuyBien on 1/28/16.
 */

var news = require('../news.json')

exports.addNews = function(req, res) {
    // Your code goes here

    var newpiece = {"user": req.query.name,
        "content" : req.query.content};

    console.log(newpiece);

    news["news"].push(newpiece);

    res.render('addnews');
}