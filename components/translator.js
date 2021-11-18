const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  americanToBritish(text) {
    let result = text;
    const timeRegex = /(\d+)(:)(\d+)/g;
    result = result.replace(timeRegex, `<span class="highlight">$1.$3</span>`);
    for (let i in americanOnly) {
      result = result.replace(
        i,
        `<span class="highlight">${americanOnly[i]}</span>`
      );
    }
    for (let j in americanToBritishSpelling) {
      result = result.replace(
        j,
        `<span class="highlight">${americanToBritishSpelling[j]}</span>`
      );
    }
    for (let k in americanToBritishTitles) {
      result = result.replace(
        k,
        `<span class="highlight">${americanToBritishTitles[k]}</span>`
      );
    }
    if (text == result) return text;
    return result;
  }

  britishToAmerican(text) {
    let result = text;
    const timeRegex = /(\d+)(,|.)(\d+)/g;
    result = result.replace(timeRegex, `<span class="highlight">$1:$3</span>`);
    for (let i in britishOnly) {
      result = result.replace(
        i,
        `<span class="highlight">${britishOnly[i]}</span>`
      );
    }
    for (let j in americanToBritishSpelling) {
      result = result.replace(
        americanToBritishSpelling[j],
        `<span class="highlight">${j}</span>`
      );
    }
    for (let k in americanToBritishTitles) {
      result = result.replace(
        americanToBritishTitles[k],
        `<span class="highlight">${k}</span>`
      );
    }
    if (text == result) return text;
    return result;
  }
}

module.exports = Translator;
