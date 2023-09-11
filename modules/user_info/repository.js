const BaseRepository = require('../../common/base-repository');

class UserInfoRepository extends BaseRepository {
    constructor() {
        super('UserInfo');
    }
}

module.exports = new UserInfoRepository();