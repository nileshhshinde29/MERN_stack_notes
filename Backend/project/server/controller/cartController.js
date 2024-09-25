const Cart = require('../model/cartModel')



const addToCart = async (req, res) => {

    const { cartItem } = req.body;
    if (!cartItem) {
        res.status(400).json({ "message": "validation error" })
    }

    try {
        const cartPresent = await Cart.findOne({ 'user': req.user.id })
        console.log(cartPresent);
        if (!cartPresent) {
            const cart = await Cart.create({
                user: req.user.id,
                cartItem: [cartItem],
            })
            res.status(200).json(cart)
        }
        else {
            // checking product already present in cart or not
            const item = cartPresent.cartItem.find(item => item.product == cartItem.product)

            if (item) {
                const cart = await Cart.findOneAndUpdate({ "user": req.user.id, 'cartItem.product': cartItem.product },
                    {
                        "$set": {
                            "cartItem.$": {  // $ is used here for keeping other product as it is and only this will update // Its not override
                                ...cartItem, quantity: item.quantity + 1
                            }
                        }
                    }
                )
                res.status(200).json({ cart })
            }
            else {
                const cart = await Cart.findOneAndUpdate({ "user": req.user.id },
                    {
                        "$push": {
                            "cartItem": cartItem
                        }
                    }
                )
                res.status(200).json({ cart })
            }

        }



    } catch (error) {
        res.status(400).json(error)
    }




}

module.exports = {
    addToCart
}