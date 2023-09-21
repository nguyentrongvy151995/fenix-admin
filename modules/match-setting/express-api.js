// @ts-check
const matchSettingController = require("./controller");
const authMiddleware = require('../../middlewares/auth');

exports.load = (app) => {
  app.post("/api/v1/match-settings", authMiddleware.authenticate, matchSettingController.create);

  app.get("/api/v1/match-settings/:id", authMiddleware.authenticate, matchSettingController.findMatchById);

  app.put("/api/v1/match-settings/:id", authMiddleware.authenticate, matchSettingController.updateMatchById);

  app.get("/api/v1/match-settings", authMiddleware.authenticate, matchSettingController.getListMatch);

  app.delete(
    "/api/v1/match-settings/:id",
    authMiddleware.authenticate,
    matchSettingController.deleteMatchById
  );
};
