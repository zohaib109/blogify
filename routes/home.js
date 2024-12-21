import { Router } from "express";
import blogsCollection from "../models/blog.js";

const homeRouter = Router();

homeRouter.get("/", async (req, res) => {
  const allBlogs = await blogsCollection.find({});
  return res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

export default homeRouter;
