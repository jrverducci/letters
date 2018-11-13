const router = require('express').Router();
const sendgridController = require('../controllers/sendgrid.controller')

router.post('/', sendgridController.email)

module.exports = router;