let chai = require("chai");
let should = chai.should();
let expect = chai.expect;
const { checkTheArgsParam } = require("./controllerdata");
let param;
if (typeof process.env.npm_config_count != "undefined") {
  param = "--count";
} else if (typeof process.env.npm_config_filter != "undefined") {
  param = "--filter=" + process.env.npm_config_filter;
} else {
  param = "";
}
describe("checkTheArgsParam", function () {
  it("should return the data based on argument", function () {
    let output = {};
    checkTheArgsParam(param)
      .then((result) => {
        result.should.have
          .property("name")
          .which.is.an("object")
          .and.has.property("people");
      })
      .catch((err) => {
        expect(err).to.be.an("string");
      });
  });
});
