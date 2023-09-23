const BaseController = require("../../common/base-controller");
const RankSettingService = require('./service');

class RankTierController extends BaseController {
    async create(req, res) {
        const { season, tierName, numberOfMedal, coins } = req.body;

        const result = await RankSettingService.create({
            coins,
            season,
            tierName,
            numberOfMedal,
        });

        res.success(result);
    }

    async getRankTiers(req, res) {
        const { page, limit, search } = req.query;
        const data = await RankSettingService.getRankTiers({ page, limit, search });

        res.success(data);
    }
    async getRankTier(req, res) {
        const { id } = req.params;
        const find =  await RankSettingService.getRankTier(id);
        const data = await RankSettingService.getRankTier(id);

        res.success(data);
    }
    async updateRankTier(req, res) {
        const { id } = req.params;
        const data = await RankSettingService.updateRankTier(id, req.body);

        res.success(data);
    }
    async deleteRankTier(req, res) {
        const { id } = req.params;
        const data = await RankSettingService.deleteRankTier(id);

        res.success(data);
    }
}

module.exports = new RankTierController();