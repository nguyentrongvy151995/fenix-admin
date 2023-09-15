const BaseController = require("../../common/base-controller");
const RankSettingService = require('./service');

class RankSettingController extends BaseController {
    async create(req, res) {
        await RankSettingService.create(req.body);

        res.success([]);
    }

    async getRankSetting(req, res) {
        const page = req.query.page || 1
        const data = await RankSettingService.getRankSettings(page);

        res.success(data);
    }
}

module.exports = new RankSettingController();