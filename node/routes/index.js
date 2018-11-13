const router = require('express').Router();
const usersRoutes = require('../routes/users.routes');
const lettersRoutes = require('../routes/letters.routes');
const sendgridRoutes = require('../routes/sendgrid.routes')

router.use("/api/users", usersRoutes)
router.use("/api/letters", lettersRoutes)
router.use("/api/email", sendgridRoutes)



module.exports = router;