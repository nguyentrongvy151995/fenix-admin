// @ts-check

const rankTiersController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/rank-tiers',
        rankTiersController.create,
    );
}