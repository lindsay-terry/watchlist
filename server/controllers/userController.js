const { User, Thought } = require('../models');

module.exports = {
    // Create a new user
    async createNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json({ user, message: 'User created successfully.' });
        } catch (error) {
            res.status(500).json({ error, message: 'Internal server error.' });
            console.error(error);
        }
    },
}