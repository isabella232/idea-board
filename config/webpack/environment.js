const { environment } = require("@rails/webpacker");

const graphqlLoader = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: "graphql-tag/loader"
};

environment.loaders.append("graphql", graphqlLoader);

module.exports = environment;
