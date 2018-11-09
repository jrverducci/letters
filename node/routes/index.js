const router = require('express').Router();
const usersRoutes = require('../routes/users.routes');
const lettersRoutes = require('../routes/letters.routes');

router.use("/api/users", usersRoutes)
router.use("/api/letters", lettersRoutes)



module.exports = router;