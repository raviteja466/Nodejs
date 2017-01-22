var express = require("express");
var router = express.Router({mergeParams: true});
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});
//=========
//Auth routes
//=========
router.get("/register", function(req, res) {
    res.render("register");
});
router.post("/register", function(req, res) {
    if (req.body.password !== req.body.password2) {
        req.flash("error", "Password Do Not Match!!");
        res.redirect('/register');
    }else {
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if(err){
          
            req.flash("error", err.message);
            return res.render("register")
        }
            passport.authenticate("local")(req,res,function(){
            req.flash("success", "welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        }) 
    })
    }
})
//=======login routes=======
router.get("/login",function(req, res) {
    // req.flash("error", "Please Login First!!")
    res.render("login")
});
router.post("/login", passport.authenticate("local",{
   successRedirect:"/campgrounds",
   failureRedirect:"/login"
}),function(req, res) {
    
});
//logout
router.get("/logout",function(req, res) {
    req.logout();
    req.flash("success", "You Logged Out");
    res.redirect("/campgrounds");
});

module.exports = router;