const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("library", "postgres", "2848",{
    dialect: "postgres",
    host: "localhost",
    logging: false
})

module.exports = sequelize