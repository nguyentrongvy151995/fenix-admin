const BaseController = require("../../common/base-controller");
const userInfoService = require('./service');

class UserInfoController extends BaseController {
    async create(req, res) {
        await userInfoService.create();

        res.success([]);
    }

    async getUserInfo(req, res) {
        const data = await userInfoService.getUserInfo();

        res.success(data);
    }
}

module.exports = new UserInfoController();