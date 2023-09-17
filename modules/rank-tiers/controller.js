const BaseController = require("../../common/base-controller");
const rankTiersService = require("./service");

class RankTiersController extends BaseController {
  async create(req, res) {
    const { coins, season, tierName, numberOfMedal } = req.body;

    await rankTiersService.create({ coins, season, tierName, numberOfMedal });

    res.success([]);
  }

  async findTiersById(req, res) {
    const { id } = req.params;

    const rankTiers = await rankTiersService.findTiersById(id);

    res.success(rankTiers);
  }

  async updateTiersById(req, res) {
    const {
      body: { coins, season, tierName, numberOfMedal },
      params: { id },
    } = req;

    await rankTiersService.updateTiersById({
      id,
      data: {
        coins,
        season,
        tierName,
        numberOfMedal,
      },
    });

    res.success([]);
  }

  async getListTiers(req, res) {
    const page = req.query.page || 1;
    const result = await rankTiersService.getListTiers(page);

    res.success(result);
  }

  async deleteTiersById(req, res) {
    const id = req.params.id;

    await rankTiersService.deleteTiersById(id);

    res.success([]);
  }
}

module.exports = new RankTiersController();
