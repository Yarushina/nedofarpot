const express = require('express');
const router = express.Router();

const usersController = require('../../app/controllers/UsersController');

router.post('/', usersController.createUser);
router.put('/name/:id', usersController.updateUserName);
router.put('/email/:id', usersController.updateUserEmail);
router.put('/password/:id', usersController.updateUserPassword);
router.delete('/:id', usersController.deleteUser);
module.exports = router;
