const express = require("express");
const cors = require('cors');

const userFactory = require('./src/factories/UserFactory.js');
const productFactory = require('./src/factories/ProductFactory.js');
const UserValidator = require('./src/utils/validations/UserValidator.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post('/login', (req, res, next) => userFactory.login(req, res, next));

app.post('/register', (req, res, next) => userFactory.createUser(req, res, next));

app.get(
  '/validateUser',
  UserValidator.validateToken,
  (_req, res) => res.sendStatus(200)
);

app.get(
  '/products/:id',
  UserValidator.validateToken,
  (req, res, next) => productFactory.getProductById(req, res, next)
);

app.get(
  '/products',
  UserValidator.validateToken,
  (req, res, next) => productFactory.getAllProducts(req, res, next)
);

app.post(
  '/simpleProduct',
  UserValidator.validateToken,
  (req, res, next) => productFactory.createSimpleProduct(req, res, next)
);

app.post(
  '/detailedProduct',
  UserValidator.validateToken,
  (req, res, next) => productFactory.createDetailedProduct(req, res, next)
);

app.post(
  '/manyProducts',
  UserValidator.validateToken,
  (req, res, next) => productFactory.createManyProducts(req, res, next)
);

app.put(
  '/products/:id',
  UserValidator.validateToken,
  (req, res, next) => productFactory.updateProduct(req, res, next)
);

app.delete(
  '/products/:id',
  UserValidator.validateToken,
  (req, res, next) => productFactory.deleteProduct(req, res, next)
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor!');
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
