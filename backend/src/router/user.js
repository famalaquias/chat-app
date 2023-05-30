const router = require('express').Router();
const userController = require('../controller/user');

router.get('/', userController.getAllUser);

router.get('/:cpf', userController.getOne);

router.post('/login', userController.login);

router.post('/register', userController.register);

module.exports = router;