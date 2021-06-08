const { checkTheArgsParam } = require("./controllerdata");
const commandLineArgs = require("command-line-args");
console.log(commandLineArgs);
describe("checkTheArgsParam", () => {
  it("check what is going on", () => {
    const output = checkTheArgsParam("hello");
    try {
      expect.arrayContaining(output);
    } catch {
      try {
        expect.stringContaining(output);
      } catch {
        expect.arrayContaining(output);
      }
    }
  });
});
