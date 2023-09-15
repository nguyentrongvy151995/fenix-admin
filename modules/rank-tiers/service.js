const rankTiersRepository = require("./repository");

class RankTiersService {
  async create({ coins, season, tierName, numberOfMedal }) {
    return rankTiersRepository.create({
      coins,
      season,
      tierName,
      numberOfMedal,
    });
  }

  async findTiersById(id) {
    return rankTiersRepository.getOne(id);
  }

  async updateTiersById({ id, data }) {
    return rankTiersRepository.updateOne({
      where: { _id: id },
      data,
    });
  }

  async getListTiers(page) {
    const [numberOfTiers, tiers] = await Promise.all([
      rankTiersRepository.count(),
      rankTiersRepository.getMany({
        page,
        limit: 10,
      }),
    ]);

    return {tiers, numberOfTiers}
  }

  async deleteTiersById(id) {
    return rankTiersRepository.deleteOne({ _id: id });
  }
}

module.exports = new RankTiersService();
