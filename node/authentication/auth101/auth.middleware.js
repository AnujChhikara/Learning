import { getUser } from "./auth.js";

async function authMiddlewareCheckUserLoggedIn(req, res, next) {
  const sessionId = req.cookies.sessionId;
  if (!sessionId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const user = getUser(sessionId);
  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  req.user = user;
  next();
}

export { authMiddlewareCheckUserLoggedIn };
