const RankSettingRepository = require("./repository");
const {  ERROR_MESSAGES } = require("../../constants/common");

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

  async getRankSetting(id) {
    try {
      const data = await RankSettingRepository.getById(id)
      if (!data) {
        throw new Error(ERROR_MESSAGES.DATA_NOT_EXIST);
      }
      return {data}
    } catch (error) {
      throw new Error(ERROR_MESSAGES.SYSTEM_ERROR)
    }    
  }

  async updateRankSetting(id, body) {
    console.log('body', body)
    try {
      const data = await RankSettingRepository.updatebyId(id, body)
      if (!data) {
        throw new Error(ERROR_MESSAGES.DATA_NOT_EXIST);
      }
      return {data}
    } catch (error) {
      throw new Error(ERROR_MESSAGES.SYSTEM_ERROR)
    }    
  }

  async deleteRankSetting(id) {
    try {
      const data = await RankSettingRepository.deleteOne(id)
      return {data}
    } catch (error) {
      throw new Error(ERROR_MESSAGES.SYSTEM_ERROR)
    }    
  }
}

module.exports = new RankSettingService();
