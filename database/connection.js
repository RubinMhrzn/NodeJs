const mongooes = require("mongoose");
mongooes
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
