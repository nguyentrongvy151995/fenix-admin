const BaseRepository = require("../../common/base-repository");

class MatchMakingRepository extends BaseRepository {
  constructor() {
    super("MatchMaking");
  }
}

module.exports = new MatchMakingRepository();
