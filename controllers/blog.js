import blogsCollection from "../models/blog.js";
import commentsCollection from "../models/comment.js";

export const renderAddBlog = (req, res) => {
  return res.render("addBlog", { user: req.user });
};

export const getBlogById = async (req, res) => {
  const blog = await blogsCollection
    .findById(req.params.id)
    .populate("createdBy");
  const comments = await commentsCollection
    .find({
      blogId: req.params.id,
    })
    .populate("createdBy");

  return res.render("blog", {
    user: req.user,
    blog,
    comments,
  });
};

export const addComment = async (req, res) => {
  await commentsCollection.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
};

export const createBlog = async (req, res) => {
  const { title, body } = req.body;
  const createdBy = req.user._id;
  const coverImageURL = `/uploads/${req.file.filename}`;
  const blog = await blogsCollection.create({
    title,
    body,
    createdBy,
    coverImageURL,
  });
  return res.redirect(`/blog/${blog._id}`);
};
