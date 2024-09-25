const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        max: 400,
    },
    quantity: {
        type: Number,
    },
    productPictures: [
        { img: { type: String } }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    offer: {
        type: Number
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',
            review: String,
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },


}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)