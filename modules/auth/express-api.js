// @ts-check

const authController = require('./controller');

exports.load = app => {
    app.post(
        '/api/v1/register',
        authController.register 
    ),
    app.post(
        '/api/v1/login',
        authController.login,
    )
};
