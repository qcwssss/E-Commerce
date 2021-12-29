const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECRET
        ).toString(),
        isAdmin: req.body.isAdmin
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        !user && res.status(401).json('Wrong credentials! Could not find user.');

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SECRET
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password && res.status(401).json('Invalid password');

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET,
        {expiresIn: "3d"},
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;