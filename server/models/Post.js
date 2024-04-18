const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    type: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "post",
  }
);

module.exports = Post;
