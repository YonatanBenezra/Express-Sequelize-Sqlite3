const express = require("express");
const blogRoutes = require("./routes/blog");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.use("/api/blogs", blogRoutes);

app.all("*", (req, res) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;
