import blogsCollection from "../models/blog.js";

export const getHome = async (req, res) => {
  const allBlogs = await blogsCollection.find({});
  return res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
};
