const mongoose = require("mongoose");
require("dotenv").config();

const db_URL = process.env.DB_URL;

mongoose
  .connect(db_URL)
  .then(() => {
    console.log("Mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

module.exports = mongoose;
