const Sequelize = require("sequelize");

const sequelize = new Sequelize("h4c_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

async function validate() {
  try {
    await sequelize.authenticate();
    console.info("Database connection was established successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

module.exports = { sequelize, validate };
