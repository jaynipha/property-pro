const { Router } = require('express');
const router = Router();

const { validationMiddleware } = require('../middlewares/validation')
const { userController }= require('../controllers');
const { signupSchema, signinSchema } = require('../validation/auth');
const { signIn, signUp } = userController;

router.post('/signMeUp', validationMiddleware(signupSchema),  signUp)
router.post('/signIn', validationMiddleware(signinSchema), signIn)

module.exports = router;