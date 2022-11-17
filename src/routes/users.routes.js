const { Router } = require('express');
const { getUserById, getUserWithCousers, createUser, updateUser } = require('../controllers/users.controllers')

const router = Router();

router.get('/users/:id', getUserById);

router.get('/users/:id/courses', getUserWithCousers);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

module.exports = router;

/* 
1. Obtener a un usuario por su id (Deberás mostrar la información del usuario menos created_at, updated_at y password)
2. Obtener a un usuario junto con los cursos donde esta suscrito (Mostrar los mismos datos del usuario que en el punto anterior junto al nombre del curso)
3. Crear un usuario
4. Actualizar un usuario, (solo se permitirá los nombres y la contraseña)
*/