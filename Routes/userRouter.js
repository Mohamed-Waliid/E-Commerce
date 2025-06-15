const express = require('express');

const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('../Controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
