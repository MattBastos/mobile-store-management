const { Router } = require('express');
const userRouter = require('./userRouter.js');

const router = Router();

router.use(userRouter);

module.exports = router;
