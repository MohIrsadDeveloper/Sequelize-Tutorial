const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbConfig");

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  myDate : {
    type : DataTypes.DATE,
    defaultValue : DataTypes.NOW
  }
}, {
  // Other model options go here
  timestamps : false, // By default is true
  // createdAt : true,
  // updatedAt : "Updated_Time_Stamp", // remane Column Name
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;