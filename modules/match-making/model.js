// @ts-check
const BaseModel = require("../../common/base-model");

const matchMakingModel = new BaseModel({
  modelName: "MatchMaking",
  options: {
    collection: "match-making",
  },
  schema: {
    tierWeight: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    medalWeight: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    winLossWeight: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    pointRange: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    timeToUpRange: {
      type: Number,
      required: true,
      min: 1,
    },
  },
});

module.exports = matchMakingModel;
