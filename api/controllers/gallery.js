const { GalleryImage } = require("../models/gallery-image");

async function saveImage(req, res) {
  try {
    new_image = await GalleryImage.create({
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
      filename: req.file.filename,
    });

    res.status(200).json({
      status: "success",
      data: new_image,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
}

async function saveImages(req, res) {
  console.log(req.files);
  const upload_images = [];
  try {
    uploaded_images = await GalleryImage.bulkCreate(req.files);

    res.status(200).json({
      status: "success",
      data: uploaded_images,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
}

async function fetchSingleImage(req, res) {
  const image_id = req.params.id;
  try {
    fetched_image = await GalleryImage.findByPk(image_id);

    res.status(200).json({ status: "success", data: fetched_image });
  } catch (error) {
    res.status(200).json({ status: "failed", data: error });
  }
}

async function fetchImages(req, res) {
  const current_page = req.params.page_number;

  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    fetched_images = await GalleryImage.findAll({ limit, offset });

    res.status(200).json({ status: "success", data: fetched_images });
  } catch (error) {
    res.status(500).json({ status: "failed", data: error });
  }
}

module.exports = {
  fetchSingleImage,
  fetchImages,
  saveImages,
  saveImage,
};
