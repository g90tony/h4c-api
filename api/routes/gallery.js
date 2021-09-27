const express = require("express");
const GalleryImageController = require("../controllers/gallery");
const { gallery_upload } = require("../config/bucket");

const router = express.Router();

router.get("/get/image/one/:id", GalleryImageController.fetchSingleImage);

router.get("/get/images/all/:page_number", GalleryImageController.fetchImages);

router.post(
  "/upload/image/many",
  gallery_upload.array("images"),
  GalleryImageController.saveImages
);
router.post(
  "/upload/image/one",
  gallery_upload.single("image"),
  GalleryImageController.saveImage
);

module.exports = router;
