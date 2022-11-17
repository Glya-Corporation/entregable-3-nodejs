const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const UsersCourses = require("../models/userCourses.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

// arreglos con la información que se va a plantar
initModels();

const users = [
    { firstName: "Luis Alfonso", lastName: "Uzcategui Martinez", email: "alfonsouzcategui2@gmail.com", password: "123456789" },
    { firstName: "Andreina Maria", lastName: "Bozo Guevara", email: "bozo456@gmail.com", password: "123456789" }
];

const usersCourses = [
    { userId: 1, courseId: 1 },
    { userId: 2, courseId: 2 }
];

const courses = [
    { title: "Programacion", description: "curso de full stack", instructor: "Luis" },
    { title: "Cocina", description: "Aprende platos gourmet", instructor: "Greta" }
];

const categories = [
    { name: "Informatica y computacion", courseId: 1 },
    { name: "Comida", courseId: 2 }
];

const videos = [
    { title: "JavaScrpit", url: "https://www.google.com.ve", courseId: 1 },
    { title: "Preparar salsa de tomate", url: "https://www.google.com.ve", courseId: 2 }
];

db.sync({ force: true }).then(async () => {
    console.log("Start plantations");

    users.forEach((user) => Users.create(user));

    setTimeout(() => {
        courses.forEach(course => Courses.create(course));
    }, 300);
    setTimeout(() => {
        usersCourses.forEach(r => UsersCourses.create(r));
    }, 400);
    setTimeout(() => {
        categories.forEach(category => Categories.create(category));
    }, 500);
    setTimeout(() => {
        videos.forEach(video => Videos.create(video));
    }, 600);
    console.log("Plantations completed");
});