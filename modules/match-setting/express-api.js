// @ts-check
const matchSettingController = require("./controller");

exports.load = (app) => {
  app.post("/api/v1/match-settings", matchSettingController.create);

  app.get("/api/v1/match-settings/:id", matchSettingController.findMatchById);

  app.put("/api/v1/match-settings/:id", matchSettingController.updateMatchById);

  app.get("/api/v1/match-settings", matchSettingController.getListMatch);

  app.delete(
    "/api/v1/match-settings/:id",
    matchSettingController.deleteMatchById
  );
};
