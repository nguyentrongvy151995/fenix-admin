const RankSettingRepository = require("./repository");
const { DATA_NOT_EXIST } = require("../../constants/common");

class RankSettingService {
  async create(data) {
    return RankSettingRepository.create(data);
  }

  async getRankSettings() {
    return RankSettingRepository.getAll();
  }
}

module.exports = new RankSettingService();
