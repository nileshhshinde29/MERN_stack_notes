const categoryModel = require('../model/categoryModel')
const Category = require('../model/categoryModel')
const slugify = require("slugify")

const CreateCategory = async (req, res) => {
    const { name, parentId, categoryImage } = req.body

    if (!name) {
        return res.status(400).json({ message: "Name is required!" })
    }

    const isNameExist = await Category.findOne({ name: name })
    if (isNameExist) {
        return res.status(400).json({ message: "category is already present" })
    }

    try {
        let categoryObj = {
            name,
            slug: `${slugify(name)}-${Date.now()}`,
            parentId

        }
        if (req.file) {
            categoryObj.categoryImage = req.file.filename
        }

        const category = await Category.create(categoryObj)
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json(error)

    }

}

const getCategories = async (req, res) => {

    try {
        const categories = await Category.find()
        const nestCategories = recursiveFunctionForNestCategories(categories)
        res.status(200).send(nestCategories)
    } catch (error) {
        res.status(400).json(error)
    }
}

function recursiveFunctionForNestCategories(category, parentId = null) {
    let calculatedCategoryList = []
    let categoryList = []
    if (parentId == null) {
        categoryList = category.filter(cat => cat.parentId == undefined)
    }
    else {
        categoryList = category.filter(cat => cat.parentId == parentId)
    }

    for (let cat of categoryList) {
        calculatedCategoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: recursiveFunctionForNestCategories(category, cat._id)
        })
    }
    return calculatedCategoryList

}

const updateCategories = async (req, res) => {

    const { name, _id } = req.body

    try {
        if (_id && name) {
            let categoryObj = {
                name,
                slug: `${slugify(name)}-${Date.now()}`,
            }
            if (req?.file) {
                categoryObj.categoryImage = req.file.filename
            }
            var category = await Category.findOneAndUpdate({ _id }, { ...categoryObj }, { new: true })
        }
        res.status(200).send(category)
    } catch (e) {
        res.status(400).json(e)
    }


}

const deleteCategory = async (req, res) => {
    const { id } = req.body

    try {
        const ids = await Category.find({ "$or": [{ _id: id }, { parentId: id }] })
        console.log(ids);
        res.status(200).send({ message: "Ids deleted successfully" })


    } catch (err) {
        res.status(400).send(err)
    }

}

module.exports = { CreateCategory, getCategories, updateCategories, deleteCategory }