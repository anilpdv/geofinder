const { getGeoData, getCountryData } = require("./getGeoData");

getGeoData(17.3846, 78.4574)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

getCountryData("IN")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
