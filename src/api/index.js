const { Router } = require("express");
const examples = require("./routes/examples");

module.exports = () => {
  const app = Router();
  examples(app);
  return app;
};
