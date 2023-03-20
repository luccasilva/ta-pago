require('dotenv').config()
require('express-async-errors');
require('./database');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.use(async (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(process.env.PORT || 3333, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, process.env.NODE_ENV);
});