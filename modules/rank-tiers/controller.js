const BaseController = require("../../common/base-controller");
const RankSettingService = require('./service');

class RankTierController extends BaseController {
    async create(req, res) {
        await RankSettingService.create(req.body);

        res.success([]);
    }

    async getRankTiers(req, res) {
        const page = req.query.page || 1
        const data = await RankSettingService.getRankTiers(page);

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