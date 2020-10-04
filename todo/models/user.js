'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.todo, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };
  return user;
};