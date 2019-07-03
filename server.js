const express = require('express');
const app = express();
const port = process.env.PORT;
if (port === null || port === "") {
  port = 8000;
}

app.listen(port);
