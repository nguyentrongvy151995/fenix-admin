const Food = require('../modules/food/model');
const User = require('../modules/auth/model');
const UserInfo = require('../modules/user_info/model');
const MatchSetting = require('../modules/match-setting/model');
const RankTiers = require('../modules/rank-tiers/model');
const RankSetting = require('../modules/rank_setting/model');
const MatchMaking = require('../modules/match-making/model');

module.exports = {
    Food,
    User,
    UserInfo,
    RankTiers,
    MatchSetting,
    RankSetting,
    MatchMaking,
};
