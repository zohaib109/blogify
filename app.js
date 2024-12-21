import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";

import userRouter from "./routes/user.js";
import blogRouter from "./routes/blog.js";
import homeRouter from "./routes/home.js";
import checkForAuthCookie from "./middlewares/authentication.js";

const app = express();
const PORT = process.env.PORT || 8200;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1); // Exit process with failure
  }
};

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));
app.use(express.static(path.resolve("./public")));

app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/blog", blogRouter);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
  });
};

startServer();
