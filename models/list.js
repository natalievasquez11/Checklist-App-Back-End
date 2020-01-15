const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const List = sequelize.define('list', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    task: Sequelize.STRING,
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = List;