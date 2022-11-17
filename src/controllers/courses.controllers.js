const CoursesServices = require('../services/courses.services');

const getAllNameCourses = async (req, res, next) => {
    try {
        const result = await CoursesServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
};

const getAllCourses = async (req, res, next) => {
    try {
        const result = await CoursesServices.getAllInfo();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        //next(error)
    }
};

const createCourses = async (req, res, next) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.createCourse(newCourse);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        //next(error)
    }
};

const updateCourses = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await CoursesServices.updateCourse(updateData, id);
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllNameCourses, getAllCourses, createCourses, updateCourses }