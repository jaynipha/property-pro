const { Router } = require('express');
const router = Router();

const { userController }= require('../controllers')
const { signIn, signUp } = userController;

router.post('/signMeUp', signUp)
router.post('/signIn', signIn)

module.exports = router;