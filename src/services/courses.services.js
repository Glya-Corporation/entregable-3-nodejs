const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const Videos = require('../models/videos.models');

class CoursesServices {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                attributes: ['title']
            });
            return result
        } catch (error) {
            throw error
        }
    }

    static async getAllInfo() {
        try {
            const result = await Courses.findAll({
                attributes: ['title'],
                include: [
                    {
                        model: Categories,
                        as: 'categories_course',
                        attributes: ['name']
                    }, {
                        model: Videos,
                        as: 'courses_video',
                        attributes: ['title', 'url']
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async createCourse(newCourse) {
        try {
            const result = await Courses.create(newCourse);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async updateCourse(updateData, id) {
        try {
            const result = await Courses.update(updateData, {
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = CoursesServices;