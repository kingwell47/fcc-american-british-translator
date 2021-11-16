const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  americanToBritish(word) {
    if (americanOnly[word]) {
      return americanOnly[word];
    } else if (americanToBritishSpelling[word]) {
      return americanToBritishSpelling[word];
    } else if (americanToBritishTitles[word]) {
      return americanToBritishTitles[word];
    } else {
      return false;
    }
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  britishToAmerican(word) {
    if (britishOnly[word]) {
      return britishOnly[word];
    } else if (this.getKeyByValue(americanToBritishSpelling, word)) {
      return this.getKeyByValue(americanToBritishSpelling, word);
    } else if (this.getKeyByValue(americanToBritishTitles, word)) {
      return this.getKeyByValue(americanToBritishTitles, word);
    } else {
      return false;
    }
  }
}

module.exports = Translator;
