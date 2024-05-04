const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const User = require('../models/user');

passport.use(new LocalStrategy(
    async function (username, password, cb) {
        try {
            let user = await User.findOne({ username });
            if (!user) return cb(null, false);
            
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) return cb(err);
                else if (result == false) return cb(null, false);
                cb(null, user);
            });

        } catch (err) {
            if (err) { return cb(err); }
        }

    }
))

passport.serializeUser(function (user, done) {
    done(null, user._id);
});


passport.deserializeUser(async function (id, done) {
    console.log("Deserialize",id);
    try{
        console.log("Deserialize" ,id);
        let user = await User.findOne({_id: id});
        console.log("Deserialize" ,user);
        if(!user) return done(null, false);
        done(null, user);
    }catch(err){
        done(err,false);
    }

});


module.exports = passport;