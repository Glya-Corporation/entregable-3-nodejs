const Courses = require('../models/courses.models');
const UsersCourses = require('../models/userCourses.models');
const Users = require('../models/users.models');

class UsersServices {
    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ['id', 'firstName', 'lastName', 'email']
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getUserJoinCourse(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ['first_name', 'last_name'],
                include: {
                    model: Courses,
                    as: 'courses',
                    attributes: ['title']
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async createUsers(newUser) {
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async updateUser(updateData, id) {
        try {
            const result = await Users.update(updateData, {
                where: { id }
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices;