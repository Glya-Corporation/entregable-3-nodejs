const Users = require('./users.models');
const Courses = require('./courses.models');
const UsersCourses = require('./userCourses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');

const initModels = () => {
    Courses.hasMany(Categories, {as: 'categories_course', foreingKey: 'course_id' });
    Categories.belongsTo(Courses, {as: 'course', foreingKey: 'course_id' });
    
    Courses.hasMany(Videos, {as: 'courses_video', foreingKey: 'course_id' });
    Videos.belongsTo(Courses, {as: 'course', foreingKey: 'course_id' });
    
    Users.belongsToMany(Courses, {as: 'courses', through: 'users_courses' });
    Courses.belongsToMany(Users, {as: 'users',through: 'users_courses' });
};

module.exports = initModels;
