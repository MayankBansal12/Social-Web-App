const User=require("../models/user");

module.exports.profile=function(req,res){
    return res.render('users',{
        title: "Users/Profile"
    })
};

// render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title: "Users/Sign in"
    })
};

// render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: "Users/Sign Up"
    })
};

// Session for sign up
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirmPassword){
        return res.redirect("back");
    }
    User.findOne({email: req.body.email}).then((user)=>{
        if(!user){
            User.create(req.body).then(()=>{
                return res.redirect("/users/sign_in");
            }).catch((err)=>{
                console.log("error in creating the user",err);
                return;
            });
        }else{
            console.log("User available");
            return res.redirect("back");
        }
    }).catch((err)=>{
        // if(err){
            console.log("Error in finding the user");
            return;
        // }
        // return res.redirect("back");
    });
};

// Session for sign in
module.exports.createSession=function(req,res){
    // ToDo Later
};