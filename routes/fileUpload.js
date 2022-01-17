const express = require('express');
const router = express.Router();
const FileUpload = require('../controllers/fileUpload');

router.post('/image', FileUpload.uploadFile); // api for File Upload.

router.get('/images', FileUpload.getFile); // api to get Files.

module.exports = router;
