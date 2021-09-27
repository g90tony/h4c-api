const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const GalleryImage = sequelize.define("Gallery_Image", {
  fieldname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  encoding: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function syncGalleryImageTable() {
  try {
    await GalleryImage.sync();

    console.info("Gallery Image table was created successfully");
  } catch (error) {
    console.error(
      "There was a problem creating the gallery image table",
      error
    );
  }
}

module.exports = {
  GalleryImage,
  syncGalleryImageTable,
};
