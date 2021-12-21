const Type = require('../models/models');
const ApiError = require('../error/ApiError');

class ColorController {
  async addcolor(req, res) {
    const { name } = req.body;
    const { u } = req.body;
    const type = await Type.Color.create({ name });
    return res.json({ type });
  }
  async getcolors(req, res) {
    return res.json(await Type.Color.findAll());
  }
  async getcolor(req, res) {}
}
module.exports = new ColorController();
