const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { env } = require("./environment/environment");
const router = express.Router();
const routes = require("./route");

const queryParser = require('express-query-parser'),
  mongoose = require("./db/mongoose"),
  port = process.env.PORT,
  app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true
  }))
routes.map(route => {
  app.use(route.path, route.handler);
});
app.listen(port, () => {
  console.log(`Server started at  ${port}, ${process.env.NODE_ENV}, ${process.env.MONGODB_URI}`);
});