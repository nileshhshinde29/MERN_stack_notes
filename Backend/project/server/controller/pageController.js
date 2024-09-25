const Page = require("../model/pages")



const createPage = async (req, res) => {

    const { banner, products } = req.files

    if (banner?.length > 0) {
        req.body.banner = banner.map(item => ({
            img: item.filename,
            navigateTo: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.category}`
        }))
    }

    if (products?.length > 0) {
        req.body.products = products.map(item => ({
            img: item.filename,
            navigateTo: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.category}`
        }))
    }
    req.body.createdBy = req.user.id



    try {
        const page = await Page.create(req.body)
        res.status(200).send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    createPage
}