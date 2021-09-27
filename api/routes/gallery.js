const express = require("express");
const GalleryImageController = require("../controllers/gallery");
const { cloudinary, upload } = require("../config/bucket");

const router = express.Router();

router.get("/get/image/:id", (req, res) => {
  controller_response = GalleryImageController.fetchSingleImage(req.params.id);

  if (controller_response.status === "success") {
    res
      .status(200)
      .json({
        message: "Successfully fetched image.",
        data: controller_response.data,
      });
  } else {
    res
      .status(500)
      .json({
        message: "There was a problem fetching the image",
        error: controller_response.data,
      });
  }
});

router.get("/get/image/:page_number", (req, res) => {
  controller_response = GalleryImageController.fetchImages(
    req.params.page_number
  );

  if (controller_response.status === "success") {
    res
      .status(200)
      .json({
        message: "Successfully fetched page images ",
        data: controller_response.data,
      });
  } else {
    res
      .status(500)
      .json({
        message: "There was a problem fetching page images",
        error: controller_response.data,
      });
  }
});

router.post("/upload/image/many", upload.arrays(images), (req, res) => {
  upload_images = req.files;

  controller_responser = GalleryImageController.saveImages(upload_images);

  if ((controller_response.status = "success")) {
    res
      .status(200)
      .json({
        message: "Successfully uploaded image",
        data: controller_response.data,
      });
  } else {
    res.status(500).json({
      message: "There was a problem uploading the image",
      error: controller_response.data,
    });
  }
});
router.post("/upload/image/one", upload.single(image), (req, res) => {
  upload_image = req.file;

  controller_responser = GalleryImageController.saveImage(upload_image);

  if ((controller_response.status = "success")) {
    res
      .status(200)
      .json({
        message: "Successfully uploaded all the images",
        data: controller_response.data,
      });
  } else {
    res.status(500).json({
      message: "There was a problem uploading the images",
      error: controller_response.data,
    });
  }
});

module.exports = router;
