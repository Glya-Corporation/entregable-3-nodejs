const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middellwares/error.middellware')
const initModels = require('./models/initModels')
const usersRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const categoriesRoutes = require('./routes/categories.routes');
const videosRoutes = require('./routes/videos.routes');
const userCourseRoutes = require('./routes/userCourse.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
    .then(() => console.log('Autenticación exitosa'))
    .catch(error => console.log(error));

db.sync({ force: false })
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log(error))

initModels();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to server' });
});

app.use('/api/v1', usersRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', videosRoutes);
app.use('/api/v1', userCourseRoutes);

app.use(handleError);

module.exports = app;