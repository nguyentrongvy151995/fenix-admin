// @ts-check

const userInfoController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/user-info',
        userInfoController.create,
    ),
    app.get(
        '/api/v1/user-info',
        userInfoController.getUserInfo,
    )
};
