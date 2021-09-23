const { Blog } = require("./api/models/blog");

async function create_post(payload) {
  try {
    new_post = await Blog.create({
      title: payload.title,
      image: payload.image,
      views: payload.views,
      publishedOn: payload.publishedOn,
      author: payload.author,
      content: payload.content,
      category: payload.category,
      tags: payload.tags,
      status: payload.status,
    });

    return { status: "success", data: new_post };
  } catch (error) {
    return { status: "failed", data: error };
  }
}

async function fetchPosts(current_page = 1) {
  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    all_posts = await Blog.findAll({ limit, offset });

    return { status: "success", data: all_posts };
  } catch (error) {
    console.error("There was a problem fetching all the posts");

    return { status: "failed", data: error };
  }
}

async function fetchPublishedPosts(current_page = 1) {
  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    all_posts = await Blog.findAll({
      where: { status: "Published" },
      limit,
      offset,
    });

    return { status: "success", data: all_posts };
  } catch (error) {
    console.error("There was a problem fetching all the posts");

    return { status: "failed", data: error };
  }
}

async function fetchDraftPosts(current_page = 1) {
  const limit = 20;
  const offset = (current_page - 1) * 20;
  try {
    all_posts = await Blog.findAll({
      where: { status: "Published" },
      limit,
      offset,
    });

    return { status: "success", data: all_posts };
  } catch (error) {
    console.error("There was a problem fetching all the posts");

    return { status: "failed", data: error };
  }
}

async function fetchSinglePost(post_id) {
  try {
    blog_post = await Blog.findAll({
      where: {
        id: post_id,
      },
    });

    return { status: "success", data: blog_post };
  } catch (error) {
    console.error("There was a problem fetching the blog post");

    return { status: "failed", data: error };
  }
}

async function publishPost(post_id) {
  try {
    fetched_post = await Blog.findByPk(post_id);

    fetched_post.status = "published";

    isSaved = await fetched_post.save();

    if (isSaved) {
      return { status: "success" };
    } else {
      return { status: "failed", data: "none" };
    }
  } catch (error) {
    return { status: "failed", data: error };
  }
}

async function deletePost(post_id) {
  try {
    fetched_post = await Blog.findByPk(post_id);

    isDeleted = await fetched_post.destroy();
  } catch (error) {
    return { status: "failed", data: error };
  }
}

module.exports = {
  create_post,
  fetchSinglePost,
  fetchPosts,
  fetchPublishedPosts,
  fetchDraftPosts,
  publishPost,
  deletePost,
};
