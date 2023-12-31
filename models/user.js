const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const User = sequelize.define('User', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false

    },

    name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
       
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    }


});

module.exports = User;