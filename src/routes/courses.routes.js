const { Router } = require('express');
const { getAllNameCourses, getAllCourses, createCourses, updateCourses } = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllNameCourses);

router.get('/courses/info', getAllCourses);

router.post('/courses', createCourses);

router.put('/courses/:id', updateCourses);

module.exports = router;
/* 
6. Obtener todos los cursos
7. Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre, de los videos solo deberás mostrar el nombre y su url
8. Crear un nuevo curso
9. Editar un curso (solo se permite cambiar la descripción)
*/