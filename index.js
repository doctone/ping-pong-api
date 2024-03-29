import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
