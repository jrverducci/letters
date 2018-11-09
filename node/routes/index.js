const router = require('express').Router();
const usersRoutes = require('../routes/users.routes');

router.use("/api/users", usersRoutes)



module.exports = router;