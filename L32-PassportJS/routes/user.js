const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controller/user');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isLoggedOut = require('../middlewares/isLoggedOut');

router.get('/', userController.getHome);
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);
router.get('/profile', isLoggedIn, userController.getProfile);

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/profile');
    });

router.post('/signup', userController.postSignup);

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });


module.exports = router;