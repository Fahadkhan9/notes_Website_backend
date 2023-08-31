const express = require("express");
var cors = require("cors");
const app = express();
require("./utils/db");
require("dotenv").config();

app.use(cors());
const blogsRoute = require("./routes/blogs.routes");

app.use(express.json());

app.use(blogsRoute);

const PORT = process.env.PORT || 4000;

// creating server in express
app.listen(PORT, () => {
  console.log("server is listening at port no", PORT);
});
