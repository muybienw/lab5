var data = require('../data.json');


exports.viewProfile = function(req, res) {
    // controller code goes here 

    var name = req.params.name;
    console.log("The profile name is: " + name);

    // console.log(data);
    // console.log(data["friends"]);

    var profile = -1;

    for (var friend in data["friends"]) {
        console.log(friend);
        console.log(data["friends"][friend]["name"]);

        if (data["friends"][friend]["name"] == name) {
            profile = friend;
            console.log("profile index is : " + profile);
            break;
        }
    }

    console.log("Friend data is " + profile);

    if (profile == -1) {
        res.render('error')
    }
    else {
        res.render('profile', data["friends"][profile]);
    }

    //res.render('profile', {
    //    'name' : name // assign value to a handlebar expression
    //});
};