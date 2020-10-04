'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER
  }, {});
  todo.associate = function(models) {
    todo.belongsTo(models.user, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };
  return todo;
};