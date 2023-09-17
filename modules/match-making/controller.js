const BaseController = require("../../common/base-controller");
const matchMakingServiceService = require("./service");

class MatchMakingController extends BaseController {
  async create(req, res) {
    await matchMakingServiceService.create();
  }

  async findMatchMakingById(req, res) {
    await matchMakingServiceService.findMatchMakingById();
  }

  async updateMatchMakingById(req, res) {
    await matchMakingServiceService.updateMatchMakingById();
  }

  async getListMatchMaking(req, res) {
    await matchMakingServiceService.getListMatchMaking();
  }

  async deleteMatchMakingById(req, res) {
    await matchMakingServiceService.deleteMatchMakingById();
  }
}

module.exports = new MatchMakingController();
