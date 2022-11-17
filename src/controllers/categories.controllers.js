const CategoriesServices = require('../services/categories.services');

const createCategory = async (req, res, next) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.createCategory(newCategory);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: 'the information sent has an error'
        })
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await CategoriesServices.deleteCategory(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        //next(error)
    }
}

module.exports = { createCategory, deleteCategory };