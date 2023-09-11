const foodRepository = require("./repository");

const { TIME_IN } = require("../../constants/common");

class FoodService {
  async create({ title, description, image, timeIn, isComplete }) {
    return foodRepository.create({
      title,
      image,
      timeIn,
      description,
      isComplete,
    });
  }

  async getFoods({ page, limit, timeIn }) {
    const condition = {};

    if (timeIn) {
      condition.timeIn = timeIn;
    }

    if (!page) {
      page = 1;
    }

    const [numberOfFood, foods] = await Promise.all([
      foodRepository.count(condition),
      foodRepository.getMany({
        page,
        limit: parseInt(limit),
        where: condition,
      }),
    ]);

    const [morning, lunch, dinner, snack] = await Promise.all([
      foodRepository.count({
        isComplete: true,
        timeIn: TIME_IN.MORNING,
      }),
      foodRepository.count({
        isComplete: true,
        timeIn: TIME_IN.LUNCH,
      }),
      foodRepository.count({
        isComplete: true,
        timeIn: TIME_IN.DINNER,
      }),
      foodRepository.count({
        isComplete: true,
        timeIn: TIME_IN.SNACK,
      }),
    ]);

    return {
      foods,
      numberOfFood,
      currentPage: parseInt(page),
      totalPage: Math.ceil(numberOfFood / limit),
      completedQuantity: {
        morning,
        lunch,
        dinner,
        snack,
      },
    };
  }
}

module.exports = new FoodService();
