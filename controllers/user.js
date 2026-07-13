import usersCollection from "../models/user.js";

export const renderSignin = (req, res) => {
  return res.render("signin");
};

export const renderSignup = (req, res) => {
  return res.render("signup");
};

export const logoutUser = (req, res) => {
  return res.clearCookie("token").redirect("/");
};

export const signinUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await usersCollection.matchPasswordAndGenerateToken(
      email,
      password
    );

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
};

export const signupUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    await usersCollection.create({
      fullName,
      email,
      password,
    });

    const token = await usersCollection.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signup", {
      error: "Error creating account"
    });
  }
};
