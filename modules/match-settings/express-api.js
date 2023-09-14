// @ts-check

const rankSettingsController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/rank-settings',
        rankSettingsController.create,
    );
}