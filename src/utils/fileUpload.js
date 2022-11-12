const  multer = require('multer');

const upload = multer({
  dest: 'uploads/',

  limits: {
    fileSize: 10 * 1000 * 1000,
  },

  fileFilter(req, file, cb) {
    if (
      !file.originalname.match(/\.(jpg|jpeg|png|svg|PNG|JFIF|jfif|SVG|JPEG)$/)
    ) {
      cb(404, 'File is not a valid');
    }
    cb(undefined, true);
  },
});


module.exports = upload;