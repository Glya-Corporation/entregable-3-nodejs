const UsersServices = require('../services/users.services');

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UsersServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        //next(error)
    }
};

const getUserWithCousers = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UsersServices.getUserJoinCourse(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        //next(error)
    }
};

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.createUsers(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: 'the information sent has an error'
        })
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataUpdate = req.body;
        const result = await UsersServices.updateUser(dataUpdate, id);
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = { getUserById, getUserWithCousers, createUser, updateUser }