const { Router } = require('express');
const router = Router();
const { validationMiddleware } = require('../middlewares/validation');
const { propertyController }= require('../controllers');
const  upload = require('../utils/fileUpload')
const { createAd } = propertyController;

router.post('/create-property', upload.single('file'), createAd);

module.exports = router;