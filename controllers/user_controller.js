module.exports.profile=function(req,res){
    return res.render('users',{
        title: "Users/Profile"
    })
};


module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title: "Users/Sign in"
    })
};

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: "Users/Sign Up"
    })
};