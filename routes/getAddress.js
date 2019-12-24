const express = require("express");
const router = express.Router();
const geoip = require("geoip-lite");

router.get("/", (req, res) => {
  const ip =
    request.headers["x-forwarded-for"] || request.connection.remoteAddress;
  console.log({ ip });
  const geo = geoip.lookup(ip);
  res.json(geo);
});

module.exports = router;
