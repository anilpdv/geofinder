const express = require("express");
const router = express.Router();
const geoip = require("geoip-lite");

router.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log({ ip });
  const geo = geoip.lookup(ip);
  res.json(geo);
});

module.exports = router;
