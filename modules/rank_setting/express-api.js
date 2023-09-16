// @ts-check

const RankSettingController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/rank-setting',
        RankSettingController.create,
    )
    app.get(
        '/api/v1/rank-setting',
        RankSettingController.getRankSettings,
    )
    app.get(
        '/api/v1/rank-setting/:id',
        RankSettingController.getRankSetting,
    )
    app.put(
        '/api/v1/rank-setting/:id',
        RankSettingController.updateRankSetting,
    )
    app.delete(
        '/api/v1/rank-setting/:id',
        RankSettingController.deleteRankSetting,
    )
};
