// @ts-check

const foodController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/foods',
        foodController.create,
    ),
    app.get(
        '/api/v1/foods',
        foodController.getFoods,
    )
};
