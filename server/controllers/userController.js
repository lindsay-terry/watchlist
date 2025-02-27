const { json } = require('express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // Create a new user
    async createNewUser(req, res) {
        console.log('REQ BODY', req.body);
        const { username, firstName, lastName, password } = req.body;
        if (!username || !firstName || !lastName || !password ) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            const user = await User.create(req.body);
            console.log('USER', user);
            const token = signToken({ firstName: user.firstName, username: user.username, _id: user._id });
            console.log('TOKEN FROM USER CONTROLLER', token);
            res.status(200).json({ user, token, message: 'User created successfully.' });
        } catch (error) {
            res.status(500).json({ error, message: 'Internal server error.' });
            console.error(error);
        }
    },

    async login(req, res) {
        try {
            const { username } = req.body;
            const user = await User.findOne({ username })
            
            if (!user) {
                console.log('User not part of db');
                return res.status(404).json({ message: 'User not found' });
            }

            const token = signToken(user);
            return res.status(200).json({ token, user });
        } catch (error) {
            console.error('Login error', error.message);
        }
    },
}