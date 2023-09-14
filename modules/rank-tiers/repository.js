const BaseRepository = require('../../common/base-repository');

class RankTiersRepository extends BaseRepository {
    constructor() {
        super('RankTiers');
    }
}

module.exports = new RankTiersRepository();