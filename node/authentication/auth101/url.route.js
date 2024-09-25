import express from "express";

const urlRouter = express.Router();

urlRouter.get("/", (req, res) => {
  const user = req.user.name;
  res.status(200).json({
    status: "success",
    message: "hello from the resticed url api",
    data: { user },
  });
});

export default urlRouter;
