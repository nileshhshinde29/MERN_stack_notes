const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema({

    image: {
        type: String,
    },
    file: {
        type: String,
    },


}, { timestamps: true })

module.exports = mongoose.model('UploadSchema', UploadSchema)