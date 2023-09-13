// @ts-check

const RankSettingController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/rank-setting',
        RankSettingController.create,
    )
    app.get(
        '/api/v1/rank-setting',
        RankSettingController.getRankSetting,
    )
};
