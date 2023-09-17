const RankTierRepository = require("./repository");
const {  ERROR_MESSAGES } = require("../../constants/common");

class RankSettingService {
  async create(data) {
    return RankTierRepository.create(data);
  }

  async getRankTiers(page) {
    const [total, data] = await Promise.all([
      RankTierRepository.count(),
      RankTierRepository.getMany({
        page,
        limit: 10,
      }),
    ]);

    return {data, total}
  }

  async getRankTier(id) {
    try {
      const data = await RankTierRepository.getOne({
        where: {
          _id: id
        }
      })
      if (!data) {
        throw new Error(ERROR_MESSAGES.DATA_NOT_EXIST);
      }
      return {data}
    } catch (error) {
      throw new Error(ERROR_MESSAGES.SYSTEM_ERROR)
    }    
  }

  async updateRankTier(id, body) {
    console.log('body', body)
    try {
      const data = await RankTierRepository.updatebyId(id, body)
      if (!data) {
        throw new Error(ERROR_MESSAGES.DATA_NOT_EXIST);
      }
      return {data}
    } catch (error) {
      throw new Error(ERROR_MESSAGES.SYSTEM_ERROR)
    }    
  }

  async deleteRankTier(id) {
    try {
      const data = await RankTierRepository.deleteOne(id)
      return {data}
    } catch (error) {
      throw new Error(ERROR_MESSAGES.SYSTEM_ERROR)
    }    
  }
}

module.exports = new RankSettingService();
