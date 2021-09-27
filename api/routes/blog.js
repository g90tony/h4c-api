const express = require("express");
const BlogController = require("../controllers/blog");

const router = express.Router();

router.get("/get/post/:id", (req, res) => {
  const post_id = req.params.id;

  const blog_controller_response = BlogController.fetchSinglePost(post_id);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully fetched post.",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem fetching the post.",
      error: blog_controller_response.data,
    });
  }
});

router.get("/get/posts/all/:page_number", (req, res) => {
  const current_page = req.params.page_number;

  const blog_controller_response = BlogController.fetchPosts(current_page);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully fetched page posts.",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem fetching the pages post",
      error: blog_controller_response.data,
    });
  }
});
router.get("/get/posts/published/:page_number", (req, res) => {
  const current_page = req.params.page_number;

  const blog_controller_response =
    BlogController.fetchPublishedPosts(current_page);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully fetched pages published posts.",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem fetching the pages published posts.",
      error: blog_controller_response.data,
    });
  }
});
router.get("/get/posts/draft/:page_number", (req, res) => {
  const current_page = req.params.page_number;

  const blog_controller_response = BlogController.fetchDraftPosts(current_page);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully fetched pages draft posts",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem fetching pages draft post",
      error: blog_controller_response.data,
    });
  }
});

router.post("/create/post", (req, res) => {
  const blog_controller_response = BlogController.create_post(req.body);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully created post",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem creating the blog post",
      error: blog_controller_response.data,
    });
  }
});

router.put("update/post/publish/:id", (req, res) => {
  const post_id = req.params.id;

  const blog_controller_response = BlogController.publishPost(post_id);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully published post",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem publishing the post",
      error: blog_controller_response.data,
    });
  }
});

router.put("update/post/views/:id", (req, res) => {
  const post_id = req.params.id;

  const blog_controller_response = BlogController.addView(post_id);

  if (blog_controller_response.status == "success") {
    res.status(200).json({
      message: "Successfully updated post views",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem updating the post views",
      error: blog_controller_response.data,
    });
  }
});

router.delete("delete/post/:id", (req, res) => {
  const post_id = req.params.id;

  const blog_controller_response = BlogController.deletePost(post_id);

  if (blog_controller_response.status === "success") {
    res.status(200).json({
      message: "Successfully deleted the post",
      data: blog_controller_response.data,
    });
  } else {
    res.status(500).json({
      message: "There was a problem deleting the post",
      error: blog_controller_response.data,
    });
  }
});

module.exports = router;
