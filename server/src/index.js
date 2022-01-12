const http = require("http");
const { Client } = require("pg");

//- Database client
//- Super crude sleep for now
const stop = new Date().getTime() + 5000;
while (new Date().getTime() < stop);
const client = new Client({ user: "postgres", password: "test", host: "db" });
client.connect();

client.query("SELECT $1::text as message", ["Hello world!"], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
  client.end();
});

//- API server
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
