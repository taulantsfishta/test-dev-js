let chai = require("chai");
let should = chai.should();
let expect = chai.expect;
var argv = require("minimist")(process.argv.slice(2));
console.log(argv.config);
const { checkTheArgsParam } = require("./controllerdata");
describe("checkTheArgsParam", function () {
  it("should return the data based on argument", function () {
    let output = {};
    checkTheArgsParam("--count")
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

// chai.use(chaiHttp);
// //Our parent block
// describe("/GET users", () => {
//   it("it should GET all the users", (done) => {
//     chai
//       .request(server)
//       .post("/api/v1/signin")
//       .send({ login: "taulant", password: "123456" })
//       .end((err, res) => {
//         expect(res.status).to.equal(200);
//         expect(res.body).to.be.an("array");
//         done();
//       });
//   });
// });
