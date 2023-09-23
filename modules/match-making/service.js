const matchMakingRepository = require("./repository");

class MatchMakingService {
  async create({
    tierWeight,
    medalWeight,
    winLossWeight,
    pointRange,
    timeToUpRange,
  }) {

    return matchMakingRepository.create({
      tierWeight,
      medalWeight,
      winLossWeight,
      pointRange,
      timeToUpRange,
    })
  }

  async findMatchMakingById(id) {
    return matchMakingRepository.getOne({
      where: {
        _id: id,
      },
    });
  }

  async updateMatchMakingById({ id, data }) {
    return matchMakingRepository.updateOne({
      where: { _id: id },
      data,
    });
  }

  async getListMatchMaking({page, limit}) {
    const [numberOfMatchMaking, matchKing] = await Promise.all([
      matchMakingRepository.count(),
      matchMakingRepository.getMany({
        page: page || 1,
        limit: limit || 10,
      }),
    ]);

    return { numberOfMatchMaking, matchKing };
  }

  async deleteMatchMakingById(id) {
    return matchMakingRepository.deleteOne({ _id: id });
  }
}

module.exports = new MatchMakingService();
