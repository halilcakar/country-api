const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

const tr = require("./src/tr");

const countries = [tr];

app.use(cors()).listen(PORT, () => console.log(`Listening on ${PORT}`));

countries;
