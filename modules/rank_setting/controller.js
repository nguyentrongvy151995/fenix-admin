const BaseController = require("../../common/base-controller");
const RankSettingService = require('./service');

class RankSettingController extends BaseController {
    async create(req, res) {
        await RankSettingService.create(req.body);

        res.success([]);
    }

    async getRankSettings(req, res) {
        const page = req.query.page || 1
        const data = await RankSettingService.getRankSettings(page);

        res.success(data);
    }
    async getRankSetting(req, res) {
        const { id } = req.params;
        const data = await RankSettingService.getRankSetting(id);

        res.success(data);
    }
    async updateRankSetting(req, res) {
        const { id } = req.params;
        const data = await RankSettingService.updateRankSetting(id, req.body);

        res.success(data);
    }
    async deleteRankSetting(req, res) {
        const { id } = req.params;
        const data = await RankSettingService.deleteRankSetting(id);

        res.success(data);
    }
}

module.exports = new RankSettingController();