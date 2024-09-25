const mongoose = require('mongoose')
const { timestamp } = require('rxjs')

const cartSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectID, ref: 'User', required: true,
    },
    cartItem: [
        {
            product: { type: mongoose.Schema.Types.ObjectID, ref: "Product" },
            quantity: { type: Number, default: 1 },
            price: { type: Number, required: true }
        }
    ]

}, { timestamps: true })

module.exports = mongoose.model('Cart', cartSchema)