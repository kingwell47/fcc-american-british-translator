const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  const testText = "Mangoes are my favorite fruit.";
  const testTranslation = `Mangoes are my <span class=\"highlight\">favourite</span> fruit.`;
  // Translation with text and locale fields: POST request to /api/translate
  test("Translation with text and locale fields", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: testText,
        locale: "american-to-british",
      })
      .type("application/x-www-form-urlencoded")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(res.body.text, testText);
        assert.equal(res.body.translation, testTranslation);
        done();
      });
  });
  // Translation with text and invalid locale field: POST request to /api/translate
  test("Translation with text and invalid locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: testText,
        locale: "french-to-british",
      })
      .type("application/x-www-form-urlencoded")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });
  // Translation with missing text field: POST request to /api/translate
  test("Translation with missing text field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        locale: "american-to-british",
      })
      .type("application/x-www-form-urlencoded")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  // Translation with missing locale field: POST request to /api/translate
  test("Translation with missing text field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: testText,
      })
      .type("application/x-www-form-urlencoded")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  // Translation with empty text: POST request to /api/translate
  test("Translation with empty text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .type("application/x-www-form-urlencoded")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.property(res.body, "error");
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });
  // Translation with text that needs no translation: POST request to /api/translate
  test("Translation with text that needs no translation", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: testText,
        locale: "british-to-american",
      })
      .type("application/x-www-form-urlencoded")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(res.body.text, testText);
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
