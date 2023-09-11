// @ts-check
const mongoose = require("mongoose");
const BaseModel = require("../../common/base-model");

const UserInfoModel = new BaseModel({
  modelName: "UserInfo",
  options: {
    collection: "user-info",
  },
  schema: {
    year: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 1,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    healthInformation: [
      {
        month: {
          type: String,
          required: true,
          maxlength: 20,
          minlength: 1,
        },
        weight: {
          type: Number,
          default: 0,
        },
        fatPercentage: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
});

module.exports = UserInfoModel;
