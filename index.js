const express = require("express");

const app = express();

app.use(express.static("pages"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, console.log(`🚀 Server started on port ${PORT}`));
