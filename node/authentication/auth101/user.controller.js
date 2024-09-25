import { User } from "./user.model.js";
import { v4 as uuidv4 } from "uuid";
import { setUser, getUser } from "./auth.js";

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  res.status(200).json({ message: "User created successfully" });
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  if (user.password !== password) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("sessionId", sessionId);

  res.status(200).json({ message: "Login successful" });
}

export { handleUserSignup, handleUserSignin };
