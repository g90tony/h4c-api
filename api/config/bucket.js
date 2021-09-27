const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const gallery_storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.galleryImageBucket,
  },
});

const blog_storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.blogThumbnailBucket,
  },
});

const blog_upload = multer({ storage: blog_storage });
const gallery_upload = multer({ storage: gallery_storage });

module.exports = {
  cloudinary,
  blog_upload,
  gallery_upload,
};
