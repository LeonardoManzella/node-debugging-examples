const logger = require("../../loaders/logger");
const { Router } = require("express");
const SERVICES = require("../../utils/services");
const router = Router();

module.exports = (app) => {
  app.use("/examples", router);

  router.get("/status", async (req, res, next) => {
    logger.silly(`Called /examples/status`);
    try {
      const data = req.body;
      res.status(200).json("Backend is working correctly");
    } catch (error) {
      next(error);
    }
  });

  router.get("/ndb", async (req, res, next) => {
    logger.silly(`Called /examples/ndb`);
    try {
      const data = req.body;
      res.status(200).json(SERVICES.ndbError());
    } catch (error) {
      next(error);
    }
  });

  router.get("/chrome-dev-tools", async (req, res, next) => {
    logger.silly(`Called /examples/chrome-dev-tools`);
    console.log(`Called /examples/chrome-dev-tools`);
    try {
      const data = req.body;
      res.status(200).json(SERVICES.chromeDevToolsError());
    } catch (error) {
      next(error);
    }
  });
};
