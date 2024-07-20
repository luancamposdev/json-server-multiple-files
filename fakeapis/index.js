const cartRoute = require('./cart.json');
const categoriesRoute = require('./categories.json');
const configsRoute = require('./configs.json');
const productOptionsRoute = require('./product_options.json');

// Something more

module.exports = () => ({
  cart: cartRoute,
  categories: categoriesRoute,
  configs: configsRoute,
  productOptions: productOptionsRoute,
});
