// @ts-check

const RankTierController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/rank-tiers',
        RankTierController.create,
    )
    app.get(
        '/api/v1/rank-tiers',
        RankTierController.getRankTiers,
    )
    app.get(
        '/api/v1/rank-tiers/:id',
        RankTierController.getRankTier,
    )
    app.put(
        '/api/v1/rank-tiers/:id',
        RankTierController.updateRankTier,
    )
    app.delete(
        '/api/v1/rank-tiers/:id',
        RankTierController.deleteRankTier,
    )
};
