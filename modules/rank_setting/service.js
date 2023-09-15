const RankSettingRepository = require("./repository");
const { DATA_NOT_EXIST } = require("../../constants/common");

class RankSettingService {
  async create(data) {
    return RankSettingRepository.create(data);
  }

  async getRankSettings(page) {
    const [total, data] = await Promise.all([
      RankSettingRepository.count(),
      RankSettingRepository.getMany({
        page,
        limit: 10,
      }),
    ]);

    return {data, total}
  }
}

module.exports = new RankSettingService();
