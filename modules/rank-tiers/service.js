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

  async getListTiers() {
    return rankTiersRepository.getMany({
      limit: 10,
      page: 1,
    });
  }

  async deleteTiersById(id) {
    return rankTiersRepository.deleteOne({ _id: id });
  }
}

module.exports = new RankTiersService();
