'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // apparently this doesn't really work right now. https://github.com/sequelize/sequelize/issues/10360
      allowNull: false,
      validate: {
        notEmpty: true,
        contains: '@',
      }
    },
  });
  user.associate = (models) => {
    //
  };
  return user;
};