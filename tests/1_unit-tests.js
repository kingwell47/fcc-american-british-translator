const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translator = new Translator();
  const { americanToBritish, britishToAmerican, makeRegex } = translator;
  suite("Translate American to British", () => {
    // Translate Mangoes are my favorite fruit. to British English
    test("Mangoes are my favorite fruit.", () => {
      assert.equal(
        americanToBritish("Mangoes are my favorite fruit."),
        `Mangoes are my <span class=\"highlight\">favourite</span> fruit.`
      );
    });
    // Translate I ate yogurt for breakfast. to British English
    test("I ate yogurt for breakfast.", () => {
      assert.equal(
        americanToBritish("I ate yogurt for breakfast."),
        `I ate <span class=\"highlight\">yoghurt</span> for breakfast.`
      );
    });
    // Translate We had a party at my friend's condo. to British English
    test("We had a party at my friend's condo.", () => {
      assert.equal(
        americanToBritish("We had a party at my friend's condo."),
        `We had a party at my friend's <span class=\"highlight\">flat</span>.`
      );
    });
    // Translate Can you toss this in the trashcan for me? to British English
    test("Can you toss this in the trashcan for me?", () => {
      assert.equal(
        americanToBritish("Can you toss this in the trashcan for me?"),
        `Can you toss this in the <span class=\"highlight\">bin</span> for me?`
      );
    });
    // Translate The parking lot was full. to British English
    test("The parking lot was full.", () => {
      assert.equal(
        americanToBritish("The parking lot was full."),
        `The <span class=\"highlight\">car park</span> was full.`
      );
    });
    // Translate Like a high tech Rube Goldberg machine. to British English
    test("Like a high tech Rube Goldberg machine.", () => {
      assert.equal(
        americanToBritish("Like a high tech Rube Goldberg machine."),
        `Like a high tech <span class=\"highlight\">Heath Robinson device</span>.`
      );
    });
    // Translate To play hooky means to skip class or work. to British English
    test("To play hooky means to skip class or work.", () => {
      assert.equal(
        americanToBritish("To play hooky means to skip class or work."),
        `To <span class=\"highlight\">bunk off</span> means to skip class or work.`
      );
    });
    // Translate No Mr. Bond, I expect you to die. to British English
    test("No Mr. Bond, I expect you to die.", () => {
      assert.equal(
        americanToBritish("No Mr. Bond, I expect you to die."),
        `No <span class=\"highlight\">Mr</span> Bond, I expect you to die.`
      );
    });
    // Translate Dr. Grosh will see you now. to British English
    test("Dr. Grosh will see you now.", () => {
      assert.equal(
        americanToBritish("Dr. Grosh will see you now."),
        `<span class=\"highlight\">Dr</span> Grosh will see you now.`
      );
    });
    // Translate Lunch is at 12:15 today. to British English
    test("Lunch is at 12:15 today.", () => {
      assert.equal(
        americanToBritish("Lunch is at 12:15 today."),
        `Lunch is at <span class=\"highlight\">12.15</span> today.`
      );
    });
  });
  suite("Translate British to American", () => {
    // Translate We watched the footie match for a while. to American English
    // Translate Paracetamol takes up to an hour to work. to American English
    // Translate First, caramelise the onions. to American English
    // Translate I spent the bank holiday at the funfair. to American English
    // Translate I had a bicky then went to the chippy. to American English
    // Translate I've just got bits and bobs in my bum bag. to American English
    // Translate The car boot sale at Boxted Airfield was called off. to American English
    // Translate Have you met Mrs Kalyani? to American English
    // Translate Prof Joyner of King's College, London. to American English
    // Translate Tea time is usually around 4 or 4.30. to American English
  });
  suite("Highlight translation", () => {
    // Highlight translation in Mangoes are my favorite fruit.
    // Highlight translation in I ate yogurt for breakfast.
    // Highlight translation in We watched the footie match for a while.
    // Highlight translation in Paracetamol takes up to an hour to work.
  });
});
