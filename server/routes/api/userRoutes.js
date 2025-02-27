const router = require('express').Router();
const {
    createNewUser,
    login,
} = require('../../controllers/userController');

// /api/users endpoint to create new user
router.route('/').post(createNewUser);

// /api/users/login endpoint to log user in
router.route('/login').post(login);

module.exports = router;