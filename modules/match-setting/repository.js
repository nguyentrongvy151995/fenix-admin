const BaseRepository = require("../../common/base-repository");

class RankSettingsRepository extends BaseRepository {
  constructor() {
    super("MatchSetting");
  }
}

module.exports = new RankSettingsRepository();
