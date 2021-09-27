const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Blog = sequelize.define("Blog_Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  publishedOn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Draft",
  },
});

async function syncBlogTable() {
  try {
    await Blog.sync({ force: false, alter: true });
    console.info("Blog table was created successfully");
  } catch (error) {
    console.error("There was a problem creating tables", error);
  }
}

module.exports = {
  Blog,
  syncBlogTable,
};
