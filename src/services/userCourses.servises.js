const UserCourses = require('../models/userCourses.models');

class UserCoursesServices {
    static async addToUser(userId, courseId) {
        try {
            const result = await UserCourses.create({ userId: userId, courseId: courseId });
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = UserCoursesServices;