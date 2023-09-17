const BaseController = require("../../common/base-controller");
const matchSettingService = require("./service");

class MatchSettingController extends BaseController {
  async create(req, res) {
    const { tierId,  rounds} = req.body;

    await matchSettingService.create({
      tierId,
      rounds,
    });

    res.success([]);
  }

  async findMatchById(req, res) {
    const { id } = req.params;

    const match = await matchSettingService.findMatchById(id);

    res.success(match);
  }

  async updateMatchById(req, res) {
    const {
      body: { tierId,  rounds },
      params: { id },
    } = req;

    await matchSettingService.updateMatchById({
      id,
      data: {
        tierId,
        rounds,
      },
    });

    res.success([]);
  }

  async getListMatch(req, res) {
    const { page, limit } = req.query;

    const result = await matchSettingService.getListMatch({ page, limit });

    res.success(result);
  }

  async deleteMatchById(req, res) {
    const id = req.params.id;

    await matchSettingService.deleteMatchById(id);

    res.success([]);
  }
}

module.exports = new MatchSettingController();
