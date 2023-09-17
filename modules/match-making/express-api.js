// @ts-check
const matchMakingController = require("./controller");

exports.load = (app) => {
  app.post("/api/v1/match-making", matchMakingController.create);

  app.get("/api/v1/match-making/:id", matchMakingController.findMatchMakingById);

  app.put("/api/v1/match-making/:id", matchMakingController.updateMatchMakingById);

  app.get("/api/v1/match-making", matchMakingController.getListMatchMaking);

  app.delete(
    "/api/v1/match-making/:id",
    matchMakingController.deleteMatchMakingById
  );
};
