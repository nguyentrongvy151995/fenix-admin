// import modules
const foodAPI = require('../modules/food/express-api');
const authAPI = require('../modules/auth/express-api');
const userInfoAPI = require('../modules/user_info/express-api');
const rankSettingAPI = require('../modules/rank_setting/express-api');

module.exports = app => {
    // import api
    foodAPI.load(app);
    authAPI.load(app);
    userInfoAPI.load(app);
    rankSettingAPI.load(app);
};
