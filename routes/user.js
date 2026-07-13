import { Router } from "express";
import {
  renderSignin,
  renderSignup,
  logoutUser,
  signinUser,
  signupUser,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/signin", renderSignin);

userRouter.get("/signup", renderSignup);

userRouter.get("/logout", logoutUser);

userRouter.post("/signin", signinUser);

userRouter.post("/signup", signupUser);

export default userRouter;
