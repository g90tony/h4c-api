const { GalleryImage } = require("../models/gallery-image");

async function saveImage(payload) {
  try {
    new_image = await GalleryImage.create({
      public_id: payload.public_id,
      version: payload.version,
      signature: payload.signature,
      format: payload.format,
      resource_type: payload.resource_type,
      url: payload.url,
      secure_url: payload.secure_url,
    });

    return {
      status: "success",
      data: new_image,
    };
  } catch (error) {
    return {
      status: "failed",
      data: error,
    };
  }
}

async function saveImages(payload) {
  try {
    payload.map((image) => {
      new_images = await GalleryImage.create({
        public_id: payload.public_id,
        version: payload.version,
        signature: payload.signature,
        format: payload.format,
        resource_type: payload.resource_type,
        url: payload.url,
        secure_url: payload.secure_url,
      });

      return new_image;
    });

    return {
      status: "success",
      data: new_images,
    };
  } catch (error) {
    return {
      status: "failed",
      data: error,
    };
  }
}

async function fetchSingleImage(image_id) {
  try {
    fetched_image = await GalleryImage.findByPk(image_id);

    return { status: "success", data: fetched_image };
  } catch (error) {
    return { status: "failed", data: error };
  }
}

async function fetchImages(current_page = 1) {
  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    fetched_images = await GalleryImage.findAll({ limit, offset });

    return { status: "success", data: fetched_images };
  } catch (error) {
    return { status: "failed", data: error };
  }
}

module.exports = {
  fetchSingleImage,
  fetchImages,
  saveImages,
  saveImage,
};
