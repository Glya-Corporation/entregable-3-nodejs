const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    hooks: {
        beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        },
    },
});


module.exports = Users;