// @ts-check
const { verifyToken } = require('../helpers/auth.helper');

exports.authenticate = async (req, res, next) => {
    // TODO: authenticate here
    const token = req.headers.access_token;

    if (!token) return next(new Error('INVALID_TOKEN'));

    if (!token.startsWith('Bearer')) return next(new Error('INVALID_TOKEN'));

    try {
        await verifyToken(token.split(" ")[1]);
    } catch (error) {
        return next(new Error('INVALID_TOKEN'));
    }

    next();
};
