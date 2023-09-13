const foodRepository = require("./repository");
const { DATA_NOT_EXIST } = require("../../constants/common");

class UserInfoService {
  async create({ title, description, image, timeIn, isComplete }) {
    return foodRepository.create({
      title,
      image,
      timeIn,
      description,
      isComplete,
    });
  }
}

module.exports = new UserInfoService();
