const express = require("express");
const GalleryImageController = require("../controllers/gallery");
const { cloudinary, upload } = require("../config/bucket");

const router = express.Router();

router.get("/get/image/:id", (req, res) => {
  controller_response = GalleryImageController.fetchSingleImage(req.params.id);

  if (controller_response.status === "success") {
    res.status(200).json(controller_response.data);
  } else {
    res.status(500).json(controller_response.data);
  }
});

router.get("/get/image/:page_number", (req, res) => {
  controller_response = GalleryImageController.fetchImages(
    req.params.page_number
  );

  if (controller_response.status === "success") {
    res.status(200).json(controller_response.data);
  } else {
    res.status(500).json(controller_response.data);
  }
});

router.post("/upload/image", upload.single(image), (req, res) => {
  upload_image = req.file;

  controller_responser = GalleryImageController.saveImage(response);

  if ((controller_response.status = "success")) {
    res.status(200).json(controller_response.data);
  }
});
