import { validateTokenForUser } from "../services/authentication.js";

export default function checkForAuthCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) return next();
    try {
      const userPayload = validateTokenForUser(tokenCookieValue);
      req.user = userPayload;
      return next();
    } catch (error) {
      res.clearCookie(cookieName);
      console.error("Authentication token validation failed:", error);
      return res.redirect("/signin?error=authentication_failed");
    }
  };
}
