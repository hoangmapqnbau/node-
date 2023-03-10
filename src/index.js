const express = require('express');
const app = express();
const port = 3001;

const route = require('./routes/index.route.js')

route(app);

app.listen(port, () => {});