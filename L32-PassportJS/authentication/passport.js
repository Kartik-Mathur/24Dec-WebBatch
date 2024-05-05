const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const User = require('../models/user');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4444/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {

        try {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    username: profile.displayName,
                    googleAccessToken: accessToken,
                    googleImg: profile.photos[0].value
                })
            }
            return cb(null, user);
        }
        catch (err) {
            return cb(err);
        }
    }
));

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
    console.log("Deserialize", id);
    try {
        console.log("Deserialize", id);
        let user = await User.findOne({ _id: id });
        console.log("Deserialize", user);
        if (!user) return done(null, false);
        done(null, user);
    } catch (err) {
        done(err, false);
    }

});


module.exports = passport;