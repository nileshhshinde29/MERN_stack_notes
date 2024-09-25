const slugify = require("slugify")
const Product = require("../model/productModel")

const createProduct = async (req, res) => {
    const productImages = req.files.map(item => {
        return { img: item.filename }
    })

    const { name, price, description, quantity, category } = req.body
    if (!name || !price || !description) {
        return res.status(400).json('validation error')
    }

    try {
        const productObj = {
            name,
            slug: slugify(name),
            price,
            description,
            quantity,
            category,
            productPictures: productImages,
            createdBy: req.user.id
        }

        const product = await Product.create(
            productObj
        )

        return res.status(200).json(product)
    }
    catch (e) {
        return res.status(400).json(e)

    }
}
const getAllProducts = () => {

}

module.exports = {
    createProduct, getAllProducts
}