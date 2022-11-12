const { Router } = require('express');
const router = Router();
const { validationMiddleware } = require('../middlewares/validation');
const { propertyController }= require('../controllers');
const  upload = require('../utils/fileUpload')
const { createAd, updatePropertyData } = propertyController;

router.post('/property', upload.single('file'), createAd);
router.patch('/property/:id', updatePropertyData);

module.exports = router;