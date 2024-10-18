const cors = require("cors");
const express = require("express");
const os = require('os');
const app = express();
app.use(
  cors({
    origin: "http://138.201.156.22:80",
    credentials: true,
  })
);
const appIp = os.networkInterfaces().eth0[0].address
const port = 5000
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const router = require("./routes");
const { authMiddleware } = require("./middleware/authMiddleware");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(authMiddleware);
app.use(router);
//Change DB name
mongoose.connect("mongodb://127.0.0.1:27017/angular-project");

mongoose.connection.on("connected", () => console.log("DB is connected"));
mongoose.connection.on("error", (err) => console.log(err));

app.listen(port, () => {
  console.log(`App is listening on http://${appIp}:${port}/`);
});
