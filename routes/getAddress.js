const express = require("express");
const router = express.Router();
const geoip = require("geoip-lite");
const countryjs = require("countryjs");

router.get("/", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log({ ip });
  const geo = geoip.lookup(ip);
  const countryData = countryjs.info(geo.country);

  res.json({ info: geo, country: countryData });
});

module.exports = router;
