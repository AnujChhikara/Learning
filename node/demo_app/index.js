import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://dev.realdevsquad.com",
    credentials: true,
  })
);

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.patch("/taskRequests", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send("Patched");
});

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
