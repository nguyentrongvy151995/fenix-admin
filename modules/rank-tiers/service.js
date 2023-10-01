const RankTierRepository = require("./repository");
const {  ERROR_MESSAGES } = require("../../constants/common");
const { specialRegex } = require("../../helpers/regex.helper");
const VError = require('../../common/error');

class RankSettingService {
  async create({
    coins,
    season,
    tierName,
    numberOfMedal,
  }) {

    const data = await RankTierRepository.getOne({
      where: {
        season,
        tierName
      },
    });

    if (data) {
      throw new VError({ message: ERROR_MESSAGES.SEASON_TIER_EXISTED });
    }

    return RankTierRepository.create({
      coins,
      season,
      tierName,
      numberOfMedal,
    });
  }

  async getRankTiers({ page, limit, search }) {
    const condition = {};

    if (search) {
      condition.season = specialRegex(search);
    }

    const [total, data] = await Promise.all([
      RankTierRepository.count(),
      RankTierRepository.getMany({
        page: page || 1,
        limit: limit || 10,
        where: condition,
      }),
    ]);

    return { data, total };
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
    const {season, tierName} = body
    const rsFind = await RankTierRepository.getOne({
      where: {
        season: season,
        tierName: tierName
      },
    });
    
    if (rsFind) {
      throw new VError({ message: ERROR_MESSAGES.SEASON_TIER_EXISTED });
    }

    return RankTierRepository.getOneAndUpdate({
      where: { _id: id },
      data: body,
    })
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
