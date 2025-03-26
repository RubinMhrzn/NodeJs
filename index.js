const express = require("express");
const app = express();
require("dotenv").config();
const web = require("./routes/web.js");
const categoryroute = require("./routes/CategoryRoutes.js");
const port = process.env.PORT;
require(`./database/connection.js`);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log(process.env.PORT);
app.use(web);
app.use("/category", categoryroute);
