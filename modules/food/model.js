// @ts-check

const BaseModel = require('../../common/base-model');

const FoodModel = new BaseModel({
    modelName: 'Food',
    options: {
        collection: 'foods',
    },
    schema: {
        title: {
            type: String,
            required: true,
            maxlength: 200,
            minlength: 1,
        },
        description: {
            type: String,
            maxlength: 1000,
        },
        image: {
            type: String,
            required: true,
            maxlength: 500,
            minlength: 1,
        },
        timeIn: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 1,
        },
        isComplete: {
            type: Boolean,
            default: false,
        }
    },
});

module.exports = FoodModel;