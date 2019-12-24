const country = require("countryjs");
const numbertowords = require("number-to-words");

const data = country.info("US");
const words = numbertowords.toWordsOrdinal(data.population);
console.dir(words);
