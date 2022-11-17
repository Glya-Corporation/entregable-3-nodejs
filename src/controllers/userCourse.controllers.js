const UserCourseServices = require('../services/userCourses.servises');

const addCourseToUser = async (req, res, next) => {
    try {
        const { userId, courseId } = req.body;
        const result = await UserCourseServices.addToUser(userId, courseId);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        //next(error)
    }
};
module.exports = addCourseToUser;