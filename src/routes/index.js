const { Router } = require('express');
const userRouter = require('./userRouter.js');
const productRouter = require('./productRouter.js');

const router = Router();

router.use(userRouter);
router.use(productRouter);

module.exports = router;
