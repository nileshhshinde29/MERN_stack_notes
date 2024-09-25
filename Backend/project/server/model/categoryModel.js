const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    categoryImage: {
        type: String,
    },
    parentId: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)