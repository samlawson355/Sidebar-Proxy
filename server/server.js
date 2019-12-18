const express = require("express");
const db = require("../database/index.js");
const port = 5555;
const app = express();

app.listen(port, console.log(`Listening on port ${port}...`));
