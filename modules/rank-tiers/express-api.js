// @ts-check
const rankTiersController = require("./controller");

exports.load = (app) => {
  app.post("/api/v1/rank-tiers", rankTiersController.create);

  app.get("/api/v1/rank-tiers/:id", rankTiersController.findTiersById);

  app.put("/api/v1/rank-tiers/:id", rankTiersController.updateTiersById);

  app.get("/api/v1/rank-tiers", rankTiersController.getListTiers);

  app.delete("/api/v1/rank-tiers/:id", rankTiersController.deleteTiersById);
};
