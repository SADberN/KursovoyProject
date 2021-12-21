const Router = require('express');
const router = new Router();
const itemRouter = require('./itemRouter');
const colorRouter = require('./colorRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');
const basketItemRouter = require('./basketItemRouter');
const clothSizeRouter = require('./clothSizeRouter');
const shoesSizeRouter = require('./shoesSizeRouter');

router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/color', colorRouter);
router.use('/basket', basketRouter);
router.use('/basketitem', basketItemRouter);
router.use('/shoessize', shoesSizeRouter);
router.use('/clothsize', clothSizeRouter);
module.exports = router;
