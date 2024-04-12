const express = require("express");
const bodyParser = require("body-parser");
const projectRoutes = require("./routes/project");
const fileRoutes = require("./routes/uploadFile");
const profileRoutes = require("./routes/profile");
const db = require("./database/db");

const app = express();

app.use(bodyParser.json());

db().then(() => console.log("Db connected"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/portfolio", projectRoutes);
app.use("/portfolio", fileRoutes);
app.use("/portfolio", profileRoutes);

app.listen(8080);
