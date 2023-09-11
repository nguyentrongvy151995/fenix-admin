const BaseRepository = require('../../common/base-repository');

class FoodRepository extends BaseRepository {
    constructor() {
        super('Food');
    }
}

module.exports = new FoodRepository();
