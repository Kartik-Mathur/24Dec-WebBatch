const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controller/user');
router.get('/', userController.getHome);
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);
router.get('/profile',userController.getProfile);


router.post('/signup', userController.postSignup);

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });


module.exports = router;