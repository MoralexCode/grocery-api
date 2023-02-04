const express = require("express");
const app = express();

const users = require("./usersRoute");
const products = require("./productRoute");
const sales = require("./saleRoute");
app.use("/v1", users); //
app.use("/v1", products); //
app.use("/v1", sales); //

module.exports = app;
