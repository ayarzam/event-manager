const Sequelize = require('sequelize');
const db = require('./db')

const Event = db.define('events', {
  personName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  taskName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = Event;

