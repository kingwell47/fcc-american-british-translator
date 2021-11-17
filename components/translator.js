const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  parseText(text, locale) {
    const textArray = text.split(" ");
    let result = "";
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i + 1]) {
        result +=
          " " + this.americanToBritish(`${textArray[i]} ${textArray[i + 1]}`);
      } else {
        result += " " + this.americanToBritish(textArray[i]);
      }
    }
    return result;
  }

  americanToBritish(word) {
    return (
      americanOnly[word] ||
      americanToBritishSpelling[word] ||
      americanToBritishTitles[word] ||
      word
    );
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  britishToAmerican(word) {
    return (
      britishOnly[word] ||
      this.getKeyByValue(americanToBritishSpelling, word) ||
      this.getKeyByValue(americanToBritishTitles, word) ||
      word
    );
  }
}

module.exports = Translator;
