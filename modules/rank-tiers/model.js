// @ts-check
const BaseModel = require("../../common/base-model");

const rankTiersModel = new BaseModel({
    modelName: 'RankTiers',
    options: {
        collection: 'rank-tiers',
    },
    schema: {
        season: {
            type: String,
            minlength: 1,
            maxlength: 50,
        },
        tierName: {
            type: String,
            minlength: 1,
            maxlength: 50,
        },
        medals: {
            type: Number,
            min: 1,
            max: 100,
        },
        coins: [
            {
                coin: {
                    type: String,
                    minlength: 1,
                    maxlength: 20,
                },
                quantity: {
                    type: String,
                    min: 1,
                    max: 100,
                },
            }
        ],
    },
});

module.exports = rankTiersModel;