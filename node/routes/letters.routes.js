const router = require('express').Router();
const lettersController = require('../controllers/letters.controller')

router.post('/', lettersController.create)
router.get('/', lettersController.getAll)
router.get('/parent/:id', lettersController.readByParentId)
router.get('/:id', lettersController.readById)
router.delete('/:id', lettersController.del)

module.exports = router;