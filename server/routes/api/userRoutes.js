const router = require('express').Router();
const {
    createNewUser,
} = require('../../controllers/userController');

// /api/users endpoint to create new user
router.route('/').post(createNewUser);

module.exports = router;