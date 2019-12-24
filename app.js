const express = require("express");
const app = express();

const getAddress = require("./routes/getAddress");

app.use("/", getAddress);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is started on http://localhost:${port}`);
});
