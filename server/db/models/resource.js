const Sequelize = require('sequelize')
const db = require('../db')

const Resource = db.define('resource', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  resourceUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  personalFinance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  creditCards: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  payingOffDebt: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  investing: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  saving: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  studentLoans: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Resource
