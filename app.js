const http = require("http");
const args = process.argv;
const { checkTheArgsParam } = require("./controllerdata");
const hostname = "127.0.0.1";
const port = 3000;

let result = checkTheArgsParam(args[2]);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
