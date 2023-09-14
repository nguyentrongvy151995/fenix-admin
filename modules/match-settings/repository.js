const BaseRepository = require('../../common/base-repository');

class RankSettingsRepository extends BaseRepository {
    constructor() {
        super('RankSettings');
    }
}

module.exports = new RankSettingsRepository();