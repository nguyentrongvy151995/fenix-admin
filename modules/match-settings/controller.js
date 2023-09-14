const BaseController = require("../../common/base-controller");
const matchSettingService = require("./service");

class MatchSettingController extends BaseController {
  async create(req, res) {
    await matchSettingService.create();
  }

  async findMatchById(req, res) {
    await matchSettingService.findMatchById();
  }

  async updateMatchById(req, res) {
    await matchSettingService.updateMatchById();
  }

  async getListMatch(req, res) {
    await matchSettingService.getListMatch();
  }

  async deleteMatchById(req, res) {
    await matchSettingService.deleteMatchById();
  }
}

module.exports = new MatchSettingController();
