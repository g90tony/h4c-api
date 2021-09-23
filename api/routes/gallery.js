const express = require("express");
const GalleryImageController = require("../controllers/gallery");
const cloudinary = require("cloudinary").v2;

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

router.post("/upload/image", (req, res) => {
  upload_image = req.files.image;

  cloudinary.uploader.upload(upload_image, {}, (response) => {
    controller_responser = GalleryImageController.saveImage(response);

    if ((controller_response.status = "success")) {
      res.status(200).json(controller_response.data);
    }
  });
});
