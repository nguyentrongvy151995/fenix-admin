const foodRepository = require("./repository");
const { DATA_NOT_EXIST } = require("../../constants/common");

class UserInfoService {
  async create() {
    const data = {
      year: "2023",
      userId: "6407eb91e6d38e86335890c0",
      healthInformation: [
        {
          month: '6',
          weight: 55,
          fatPercentage: 30,
        },
        {
          month: '7',
          weight: 56,
          fatPercentage: 25,
        },
        {
          month: '8',
          weight: 55,
          fatPercentage: 20,
        },
        {
          month: '9',
          weight: 57,
          fatPercentage: 25,
        },
        {
          month: '10',
          weight: 60,
          fatPercentage: 35,
        },
        {
          month: '11',
          weight: 58,
          fatPercentage: 28,
        },
        {
          month: '12',
          weight: 57,
          fatPercentage: 30,
        },
        {
          month: '1',
          weight: 55,
          fatPercentage: 20,
        },
        {
          month: '2',
          weight: 55,
          fatPercentage: 29,
        },
        {
          month: '3',
          weight: 55,
          fatPercentage: 20,
        },
        {
          month: '4',
          weight: 50,
          fatPercentage: 25,
        },
        {
          month: '5',
          weight: 55,
          fatPercentage: 20,
        },
      ],
    };

    return foodRepository.create(data);
  }

  async getUserInfo() {
    // TODO: get userId from token
    const userId = "6407eb91e6d38e86335890c0";
    const year = 2023;

    const condition = {
      userId,
      year,
    };

    const userInfo = await foodRepository.getOne({
      where: condition,
    });

    if (!userInfo) {
      throw new Error(DATA_NOT_EXIST);
    }

    return userInfo;
  }
}

module.exports = new UserInfoService();
