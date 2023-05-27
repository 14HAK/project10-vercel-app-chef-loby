const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const recipes_person = require('./public/recipesPerson.json');

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

//all methods are here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/recipes_person', (req, res) => {
  res.send(recipes_person);
});

app.post(`/recipes_person/everyrecipes/:id`, (req, res) => {
  const _id = parseInt(req.params.id);
  let rec = recipes_person;
  const findItem = rec.find((element) => parseInt(element.id) === _id);

  res.send(findItem);
});

app.listen(port, () => {
  console.log(`Server Running on Port: http://localhost:${port}`);
});
