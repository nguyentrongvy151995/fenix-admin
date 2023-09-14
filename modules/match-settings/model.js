// @ts-check
const mongoose = require("mongoose");
const BaseModel = require("../../common/base-model");
const { ROUND_TYPE, PUZZLE_TYPE } = require('../../constants/common');

const rankSettingsModel = new BaseModel({
    modelName: 'RankSettings',
    options: {
        collection: 'rank-settings',
    },
    schema: {
        tierID: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        rounds: {
            roundNo: {
                type: Number,
                required: true,
                min: 1,
                max: 5,
            },
            roundName: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 50,
            },
            roundsList: [
                {
                    name: {
                        type: String,
                        required: true,
                        minglength: 1,
                        maxlength: 20,
                    },
                    roundType: {
                        type: String,
                        required: true,
                        default: ROUND_TYPE.PLAY_AROUND,
                    },
                    mainDuration: {
                        type: Number,
                        required: true,
                        min: 1,
                    },
                    challenges: {
                        puzzleType: {
                            type: String,
                            default: PUZZLE_TYPE.MATCH_CALCULATION,
                        },
                    },
                    preparationTimeBeforeMatch: {
                        type: Number,
                        required: true,
                        min: 1,
                        max: 50,
                    },
                    timeRemaining: {
                        type: Number,
                        required: true,
                        min: 1,
                        max: 20,
                    },
                    totalGoldRewards: {
                        type: Number,
                    },
                    totalChests: {
                        type: Number,
                    },
                },
            ],
            medalRates: [
                {
                    roundNo: {
                        type: Number,
                        required: true,
                        min: 1,
                        max: 5,
                    },
                    rates: [
                        {
                            position: {
                                type: Number,
                                required: true,
                                min: 1,
                                max: 10,
                            },
                            goldToCost: {
                                type: Number,
                                required: true,
                                min: 1,
                            },
                            receivedMedals: {
                                type: Number,
                                required: true,
                                min: 1,
                            },
                        }
                    ],
                },
            ],
        },
    },
});

module.exports = rankSettingsModel;