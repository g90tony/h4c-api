const express = require("express");
const { sequelize, validate } = require("./api/config/db");
const { syncBlogTable } = require("./api/models/blog-post");

const app = express();

// confirm that the database connected successfully
validate();

// create Blog Table if not created
syncBlogTable();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`);
});
