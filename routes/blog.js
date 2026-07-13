import { Router } from "express";
import multer from "multer";
import path from "path";
import {
  renderAddBlog,
  getBlogById,
  addComment,
  createBlog,
} from "../controllers/blog.js";

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

blogRouter.get("/add-new", renderAddBlog);

blogRouter.get("/:id", getBlogById);

blogRouter.post("/comment/:blogId", addComment);

blogRouter.post("/", upload.single("coverImage"), createBlog);

export default blogRouter;
