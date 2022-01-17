module.exports = (sequelize, DataTypes) => {
    const FileUpload = sequelize.define('fileUpload', {
        filename: {
            type: DataTypes.TEXT,

        },
        mimetype: {
            type: DataTypes.TEXT,

        },
        encoding: {
            type: DataTypes.TEXT,

        },
        originalname: {
            type: DataTypes.TEXT,

        }
    });


    // This will return required JSON.
    FileUpload.prototype.toJSON = function () {
        var values = Object.assign({}, this.get());
        values.URL = 'uploads/images/' + values.filename
        values.path = `uploads/images/${values.filename}`;
        delete values.encoding;
        return values;
    }

    return FileUpload;
}