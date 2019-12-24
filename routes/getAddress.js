const express = require("express");
const router = express.Router();
const geoip = require("geoip-lite");
const countryjs = require("countryjs");

router.get("/ip", async (req, res) => {
  const data = {};
  const ip = req.ip;

  console.log({ ip });
  const geo = geoip.lookup(ip);
  // : info
  data.ip = ip;
  data.country_code = geo.country;
  data.region_code = geo.region;
  data.city = geo.city;

  const countryData = countryjs.info(geo.country);
  data.country_name = countryData.name;
  data.latitude = geo.ll[0];
  data.longitude = geo.ll[1];
  data.continent_name = countryData.region;

  // : location details
  data.location = {};
  data.location.capital = countryData.capital;
  data.location.country_flag = `http://assets.ipstack.com/flags/${countryData.ISO.alpha2.toLowerCase()}.svg`;
  data.location.calling_codes = countryData.callingCodes;
  data.location.population = countryData.population;
  data.location.languages = countryData.languages;
  data.location.states_no = countryData.provinces.length;
  data.location.states = countryData.provinces;
  data.location.native_name = countryData.nativeName;
  data.location.is_eu = geo.eu;

  // : time zone details
  data.time_zone = {};
  data.time_zone.id = geo.timezone;
  data.current_time = countryData.timezones[0];

  // : currency
  data.currency = {};
  data.currency.code = countryData.currencies;

  res.json(data);
});

module.exports = router;
