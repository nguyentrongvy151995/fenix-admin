const Food = require('../modules/food/model');
const User = require('../modules/auth/model');
const UserInfo = require('../modules/user_info/model');
const MatchSetting = require('../modules/match-settings/model');
const RankTiers = require('../modules/rank-tiers/model');
const RankSetting = require('../modules/rank_setting/model');

module.exports = {
    Food,
    User,
    UserInfo,
    RankTiers,
    MatchSetting,
    RankSetting
};
