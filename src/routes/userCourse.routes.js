const { Router } = require('express');
const addCourseToUser = require('../controllers/userCourse.controllers');

const router = Router();

router.post('/userCourse', addCourseToUser);

module.exports = router;

/* 
5. Agregar un curso a un usuario
*/