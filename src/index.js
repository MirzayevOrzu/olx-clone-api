const express = require("express");
const cors = require("cors");
const config = require("./shared/config");
const apiRoutes = require("./api");

const app = express();

process.on("unhandledRejection", (err) => {
  console.log("UnhandledRejection: ", err);
  process.exit(1);
});

app.use(cors());

app.use(express.json());

app.use(apiRoutes);

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
