const BaseController = require("../../common/base-controller");
const foodService = require("./service");

class FoodController extends BaseController {
  async create(req, res) {
    console.log(req.body);
    const { title, image, timeIn, description, isComplete, test } = req.body;

    await foodService.create({
      title,
      image,
      timeIn,
      isComplete,
      description,
      test
    });

    res.success([]);
  }

  async getFoods(req, res) {
    const { page, limit, timeIn } = req.query;
    console.log(req.query);

    const foods = await foodService.getFoods({ page, limit, timeIn });

    res.success(foods);
  }
}

module.exports = new FoodController();
