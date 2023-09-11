// @ts-check

const BaseRepository = require('../../common/base-repository');

class AuthRepository extends BaseRepository {
    constructor() {
        super('User');
    }
}

module.exports = new AuthRepository();