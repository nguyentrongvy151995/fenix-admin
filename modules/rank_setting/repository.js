const BaseRepository = require('../../common/base-repository');

class RankSettingRepository extends BaseRepository {
    constructor() {
        super('RankSetting');
    }
}

module.exports = new RankSettingRepository();
