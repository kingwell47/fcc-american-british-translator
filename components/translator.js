const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

function makeRegex(word) {
  return new RegExp(
    `([!"#$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~\\s])?(${word})([!"#$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~\\s])?`,
    "gi"
  );
}

class Translator {
  americanToBritish(text) {
    let result = text;
    const timeRegex = /(\d+)(:)(\d+)/g;
    let wordRegex;
    result = result.replace(timeRegex, `<span class="highlight">$1.$3</span>`);
    for (let i in americanOnly) {
      wordRegex = makeRegex(i);
      result = result.replace(
        wordRegex,
        `$1<span class="highlight">${americanOnly[i]}</span>$3`
      );
    }
    for (let j in americanToBritishSpelling) {
      wordRegex = makeRegex(j);
      result = result.replace(
        wordRegex,
        `$1<span class="highlight">${americanToBritishSpelling[j]}</span>$3`
      );
    }
    for (let k in americanToBritishTitles) {
      wordRegex = makeRegex(k);
      result = result.replace(
        wordRegex,
        `$1<span class="highlight">${americanToBritishTitles[k]}</span>$3`
      );
    }
    if (text == result) return text;
    return result;
  }

  britishToAmerican(text) {
    let result = text;
    const timeRegex = /(\d+)(,|.)(\d+)/g;
    result = result.replace(timeRegex, `<span class="highlight">$1:$3</span>`);
    let wordRegex;
    for (let i in britishOnly) {
      wordRegex = makeRegex(i);
      result = result.replace(
        wordRegex,
        `$1<span class="highlight">${britishOnly[i]}</span>$3`
      );
    }
    for (let j in americanToBritishSpelling) {
      wordRegex = makeRegex(americanToBritishSpelling[j]);

      result = result.replace(
        wordRegex,
        `$1<span class="highlight">${j}</span>$3`
      );
    }
    for (let k in americanToBritishTitles) {
      wordRegex = makeRegex(americanToBritishTitles[k]);
      result = result.replace(
        wordRegex,
        `$1<span class="highlight">${k}</span>$3`
      );
    }
    if (text == result) return text;
    return result;
  }
}

module.exports = Translator;
