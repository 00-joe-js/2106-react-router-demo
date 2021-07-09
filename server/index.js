const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

// logging middleware
app.use(morgan("dev"));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "public", "index.html"));
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
