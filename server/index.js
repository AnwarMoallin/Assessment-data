require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const {
  seed,
  getCountries,
  getCities,
  createCity,
  deleteCity,
} = require("./controller.js");

app.use(express.json());
app.use(cors());

app.get("/countries", getCountries);
app.get("/cities", getCities);
app.post("/cities", createCity);
app.post("/seed", seed);
app.delete("/cities/:id", deleteCity);

app.listen(3000, () => console.log(`up on 3000`));
