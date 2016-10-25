
const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

module.exports = app;
app.listen(8888);
console.log("You are listening on port 8888!");