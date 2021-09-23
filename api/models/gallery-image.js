const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const GalleryImage = sequelize.define("Gallery_Image", {
  public_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  version: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  signature: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  format: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resource_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secure_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function syncGalleryImage() {
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
  syncGalleryImage,
};
