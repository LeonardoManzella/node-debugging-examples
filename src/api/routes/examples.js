const logger = require("../../loaders/logger");
const { Router } = require("express");
const router = Router();

module.exports = (app) => {
  app.use("/examples", router);

  router.get("/status", async (req, res, next) => {
    logger.silly(`Request input /examples/status: ${JSON.stringify(req.body)}`);
    try {
      const data = req.body;
      res
        .status(200)
        .json('Backend is working correctly');
    } catch (error) {
      next(error);
    }
  });
};
