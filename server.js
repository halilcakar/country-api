console.clear();
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

const trRoutes = require('./src/tr/');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(301).redirect('/tr')
});

app.use('/tr', trRoutes);

app.listen(PORT, () =>
    console.log(`Listening on http://localhost:${PORT}`)
);