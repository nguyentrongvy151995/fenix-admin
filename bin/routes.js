// import modules
const foodAPI = require('../modules/food/express-api');
const authAPI = require('../modules/auth/express-api');
const userInfoAPI = require('../modules/user_info/express-api');
const rankTiersAPI = require('../modules/rank-tiers/express-api');
const matchMakingAPI = require('../modules/match-making/express-api');
const matchSetting = require('../modules/match-setting/express-api');

module.exports = app => {
    // import api
    foodAPI.load(app);
    authAPI.load(app);
    userInfoAPI.load(app);
    rankTiersAPI.load(app);
    matchMakingAPI.load(app);
    matchSetting.load(app);
};
