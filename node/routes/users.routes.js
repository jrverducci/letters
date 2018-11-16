const router = require('express').Router();
const validateBody = require("../filters/validate-body");
const Register = require("../models/Register");
const User = require("../models/User");
const usersController = require('../controllers/users.controller')

router.post('/', validateBody(Register), usersController.create)
router.post('/login', usersController.login)
router.post('/email', usersController.emailCheck)
router.get('/', usersController.getAll)
router.get('/:id', usersController.getById)
router.get('/logout', usersController.logout)
router.put('/:id', validateBody(User), usersController.update)
router.delete('/:id', usersController.del)

module.exports = router;