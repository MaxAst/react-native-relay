module.exports = {
  src: "./app",
  artifactDirectory: "__generated__",
  language: "typescript",
  schema: "./schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
