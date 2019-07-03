const express = require('express');
var router = express.Router();
const app = express();
let port = process.env.PORT;
if (port === null || port === "" || port === undefined) {
  port = 8000;
}

app.listen(port);
console.log(`Server listening on port ${port}...`);

app.get('/', (req, res) => {
  res.write('Hello World');
  res.end();
});

setInterval(() => {
  console.log(`Server listening on port ${port}...`);
}, 10000);
