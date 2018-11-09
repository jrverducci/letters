const router = require('express').Router();
const usersController = require('../controllers/users.controller')

router.post('/', usersController.create)
router.get('/', usersController.getAll)

module.exports = router;