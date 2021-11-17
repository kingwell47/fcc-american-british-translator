"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    // switch (locale) {
    //   case "american-to-british":
    //     console.log(translator.americanToBritish(text));
    //     break;
    //   case "british-to-american":
    //     console.log(translator.britishToAmerican(text));
    //     break;
    // }
    console.log(translator.parseText(text, locale));
  });
};
