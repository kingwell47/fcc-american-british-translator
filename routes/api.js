"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    let testStr = text.replace(/\s/g, "");
    if (!testStr.length) return res.json({ error: "No text to translate" });
    if (!locale || !text)
      return res.json({ error: "Required field(s) missing" });

    let translation = "";
    switch (locale) {
      case "american-to-british":
        translation = translator.americanToBritish(text);
        break;
      case "british-to-american":
        translation = translator.britishToAmerican(text);
        break;
      default:
        return res.json({ error: "Invalid value for locale field" });
    }
    if (translation == text) {
      translation = "Everything looks good to me!";
    }
    return res.json({ text, translation });
  });
};
