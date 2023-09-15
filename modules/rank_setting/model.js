// @ts-check

const BaseModel = require('../../common/base-model');

const RankSettingModel = new BaseModel({
    modelName: 'RankSetting',
    options: {
        collection: 'rank-setting',
    },
    schema: {
        season: {
            type: String,
            required: true,
            maxlength: 200,
            minlength: 1,
        },
        tierName: {
            type: String,
            maxlength: 1000,
        },
        Medals: {
            type: Number,
        },
        RequiredCoins: {  
            type: [
                {
                    coin: String,
                    quantity: Number,
                }
            ],
        },
    },
});

module.exports = RankSettingModel;