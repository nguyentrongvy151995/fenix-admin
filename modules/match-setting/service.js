const matchSettingRepository = require("./repository");

class MatchSettingService {
  async create({
    tierId,
    rounds,
  }) {
    return matchSettingRepository.create({
      tierId,
      rounds,
    });
  }

  async findMatchById(id) {
    return matchSettingRepository.getOne({
      where: {
        _id: id,
      },
    });
  }

  async updateMatchById({ id, data }) {
    return matchSettingRepository.updateOne({
      where: { _id: id },
      data,
    });
  }

  async getListMatch({ page, limit }) {
    const [numberOfMatch, match] = await Promise.all([
      matchSettingRepository.count(),
      matchSettingRepository.getMany({
        page: page || 1,
        limit: limit || 10,
      }),
    ]);

    return { numberOfMatch, match };
  }

  async deleteMatchById(id) {
    return matchSettingRepository.deleteOne({ _id: id });
  }
}

module.exports = new MatchSettingService();
