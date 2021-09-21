const Sequelize = require("sequelize");

function init_connection() {
  const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.info("Database connection was established successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

module.exports = [init_connection];
