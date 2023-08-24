const Sequelize = require('sequelize');

const sequelize = new Sequelize ('booking_appointment_app', 'root', '0000', {

    dialect: 'mysql',
    host: 'localhost',
    logging: console.log,
});

module.exports = sequelize;
