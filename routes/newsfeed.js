/**
 * Created by MuyBien on 1/28/16.
 */
// Get all of our friend data
var news = require('../news.json');

exports.viewNews = function(req, res){
    console.log(news);
    res.render('newsfeed', news);
};