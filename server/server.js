import express from "express";
import bodyParser from "body-parser";
import routesHandler from "./routes/handler.js";
const cors = require("cors");

import path from "path";
import { fileURLToPath } from "url";

// Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/client/build")));
app.use("/", routesHandler);

// Render client for any path
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.listen(port, () => {
  console.log("Server is running on port 4000");
});
