const BaseController = require("../../common/base-controller");
const authService = require("./service");

class AuthController extends BaseController {
  async register(req, res) {
    const { userName, email, fullName, password } = req.body;

    await authService.register({ userName, email, fullName, password });

    res.success([]);
  }

  async login(req, res) {
    const { userName, password } = req.body;

    const user = await authService.login({ userName, password });

    res.success(user);
  }
}

module.exports = new AuthController();
