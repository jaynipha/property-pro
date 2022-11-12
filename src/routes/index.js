const { Router } = require('express');
const authRouter = require('./auth');
const propertyRouter = require('./property')
const router = Router();

router.use('/auth', authRouter);
router.use('/', propertyRouter);

module.exports = router;
