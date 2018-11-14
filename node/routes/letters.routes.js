const router = require('express').Router();
const lettersController = require('../controllers/letters.controller')

router.post('/', lettersController.create)
router.get('/', lettersController.getAll)
router.get('/:id', lettersController.readByParentId)

module.exports = router;