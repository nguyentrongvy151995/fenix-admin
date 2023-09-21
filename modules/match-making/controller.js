const BaseController = require("../../common/base-controller");
const matchMakingServiceService = require("./service");

class MatchMakingController extends BaseController {
  async create(req, res) {
    const { tierWeight, medalWeight, winLossWeight, pointRange, timeToUpRange } = req.body;

    await matchMakingServiceService.create({
      tierWeight,
      medalWeight,
      winLossWeight,
      pointRange,
      timeToUpRange,
    });

    res.success([]);
  }

  async findMatchMakingById(req, res) {
    const { id } = req.params;

    const matchMaking = await matchMakingServiceService.findMatchMakingById(id);

    res.success(matchMaking);
  }

  async updateMatchMakingById(req, res) {
    const {
      body: { tierWeight, medalWeight, winLossWeight, pointRange, timeToUpRange },
      params: { id },
    } = req;

    await matchMakingServiceService.updateMatchMakingById({
      id,
      data: {
        tierWeight,
        medalWeight,
        winLossWeight,
        pointRange,
        timeToUpRange,
      },
    });

    res.success([]);
  }

  async getListMatchMaking(req, res) {
    const { page, limit } = req.query;

    const result = await matchMakingServiceService.getListMatchMaking({ page, limit });

    res.success(result);
  }

  async deleteMatchMakingById(req, res) {
    await matchMakingServiceService.deleteMatchMakingById();
  }
}

module.exports = new MatchMakingController();
