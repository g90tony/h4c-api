const { Blog } = require("../models/blog-post");

async function create_post(req, res) {
  Blog.create({
    title: req.body.title,
    image: req.file.path,
    author: req.body.author,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags,
    status: req.body.status,
  })
    .then((created_post) => {
      res.status(200).json({ status: "success", data: created_post });
    })
    .catch((error) => {
      res.status(200).json({ status: "failed", data: error });
    });
}

async function fetchPosts(req, res) {
  const current_page = req.params.page_number;

  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    all_posts = await Blog.findAll({ limit, offset });

    res.status(200).json({ status: "success", data: all_posts });
  } catch (error) {
    console.error("There was a problem fetching all the posts");

    res.status(500).json({ status: "failed", data: error });
  }
}

async function fetchPublishedPosts(req, res) {
  const current_page = req.params.page_number;

  const limit = 20;
  const offset = (current_page - 1) * 20;

  try {
    all_posts = await Blog.findAll({
      where: { status: "Published" },
      limit,
      offset,
    });

    res.status(200).json({ status: "success", data: all_posts });
  } catch (error) {
    console.error("There was a problem fetching all the posts");

    res.status(500).json({ status: "failed", data: error });
  }
}

async function fetchDraftPosts(req, res) {
  const current_page = req.params.page_number;

  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    all_posts = await Blog.findAll({
      where: { status: "Draft" },
      limit,
      offset,
    });

    res.status(200).json({ status: "success", data: all_posts });
  } catch (error) {
    console.error("There was a problem fetching all the posts");

    res.status(500).json({ status: "failed", data: error });
  }
}

async function fetchSinglePost(req, res) {
  const post_id = req.params.id;

  try {
    blog_post = await Blog.findAll({
      where: {
        id: post_id,
      },
    });

    res.status(200).json({ status: "success", data: blog_post });
  } catch (error) {
    console.error("There was a problem fetching the blog post");

    res.status(500).json({ status: "failed", data: error });
  }
}

async function publishPost(req, res) {
  const post_id = req.params.id;

  try {
    fetched_post = await Blog.findByPk(post_id);

    fetched_post.status = "published";
    fetched_post.publishedOn = Date.now();

    isSaved = await fetched_post.save();

    if (isSaved) {
      res.status(200).json({ status: "success", data: isSaved });
    } else {
      res.status(400).json({ status: "failed", data: "none" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", data: error });
  }
}

async function addView(req, res) {
  const post_id = req.params.id;

  try {
    fetched_post = await Blog.findByPk(post_id);

    fetched_post.views++;

    isSaved = await fetched_post.save();

    if (isSaved) {
      res.status(200).json({ status: "success", data: isSaved });
    } else {
      res.status(400).json({ status: "failed", data: "none" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", data: error });
  }
}

async function deletePost(req, res) {
  const post_id = req.params.id;

  try {
    fetched_post = await Blog.findByPk(post_id);

    isDeleted = await fetched_post.destroy();

    res.status(200).json({ status: "success", data: isDeleted });
  } catch (error) {
    res.status(500).json({ status: "failed", data: error });
  }
}

module.exports = {
  create_post,
  fetchSinglePost,
  fetchPosts,
  fetchPublishedPosts,
  fetchDraftPosts,
  publishPost,
  addView,
  deletePost,
};
