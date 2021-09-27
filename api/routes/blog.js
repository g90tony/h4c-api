const express = require("express");
const { blog_upload } = require("../config/bucket");
const BlogController = require("../controllers/blog");

const router = express.Router();

router.get("/get/post/:id", BlogController.fetchSinglePost);

router.get("/get/posts/all/:page_number", BlogController.fetchPosts);

router.get(
  "/get/posts/published/:page_number",
  BlogController.fetchPublishedPosts
);
router.get("/get/posts/draft/:page_number", BlogController.fetchDraftPosts);

router.post(
  "/create/post",
  blog_upload.single("image"),
  BlogController.create_post
);

router.put("/update/post/publish/:id", BlogController.publishPost);

router.put("/update/post/views/:id", BlogController.addView);

router.delete("/delete/post/:id", BlogController.deletePost);

module.exports = router;
