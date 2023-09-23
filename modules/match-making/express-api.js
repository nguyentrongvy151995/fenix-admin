// @ts-check
const matchMakingController = require("./controller");

exports.load = (app) => {
  app.post("/api/v1/match-makings", matchMakingController.create);

  app.get("/api/v1/match-makings/:id", matchMakingController.findMatchMakingById);

  app.put("/api/v1/match-makings/:id", matchMakingController.updateMatchMakingById);

  app.get("/api/v1/match-makings", matchMakingController.getListMatchMaking);

  app.delete(
    "/api/v1/match-makings/:id",
    matchMakingController.deleteMatchMakingById
  );
};
