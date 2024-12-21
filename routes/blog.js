import { Router } from "express";
import multer from "multer";
import path from "path";
import blogsCollection from "../models/blog.js";
import commentsCollection from "../models/comment.js";

const blogRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

blogRouter.get("/add-new", (req, res) => {
  return res.render("addBlog", { user: req.user });
});

blogRouter.get("/:id", async (req, res) => {
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
});

blogRouter.post("/comment/:blogId", async (req, res) => {
  await commentsCollection.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
});

blogRouter.post("/", upload.single("coverImage"), async (req, res) => {
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
});

export default blogRouter;
