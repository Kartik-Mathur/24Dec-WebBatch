const bcrypt = require('bcrypt')
const User = require('../models/user');
module.exports.getHome = (req, res, next) => {
    res.render('home');
}

module.exports.getLogin = (req, res, next) => {
    res.render('login')
}

module.exports.getSignup = (req, res, next) => {
    res.render('signup')
}


module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
        return res.render('signup', {
            msg: "Username exists choose a different name"
        })
    }
    
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
        // Store hash in your password DB.
        user = new User({
            username,
            password: hash
        })

        await user.save();

        res.redirect('/login');
    });
}


module.exports.getProfile = (req,res,next)=>{
    console.log(req.user)
    res.render('profile',{
        user:req.user
    })
}