const multer = require('multer');
const models = require('../models');

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const extArray = file.originalname.split('.');
        const extension = extArray[extArray.length - 1];
        cb(null, `${Date.now()}.${extension}`);
    },
    destination: 'uploads/',
});

const uploads = multer({ storage }).single('file');

// File Upload.
exports.uploadFile =
    async (req, res, next) => {
        uploads(req, res, async (err) => {
            if (err) {
                res.status(500);
            }
            let uploadFile = await models.fileUpload.create(req.file);
            if (!uploadFile) {
                res.status(400).json({ message: 'Error while uploading file!' })
            } else {
                res.status(200).json({
                    uploadFile
                });
            }

        });
    };

//Read File.
exports.getFile = async (req, res, next) => {

    let fileData = await models.fileUpload.findAll();
    if (!fileData) {
        return res.status(404).json({ message: 'data not found' });
    }
    return res.status(200).json({ fileData });
}