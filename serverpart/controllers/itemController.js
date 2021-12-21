const kek = require('../models/models.js');
const ApiError = require('../error/ApiError');
class ItemController {
  async additem(req, res) {
    // const { name } = req.body;
    // const { imageUrl } = req.body;
    // const { type } = req.body;
    // const typek = await kek.Item.create({ name, imageUrl, type });
    // return res.json({ typek });
  }
  async getitems(req, res) {
    return res.json(await kek.Item.findAll());
  }
  async getitem(req, res) {
    const { id } = req.params;
    const product = await kek.Item.findOne({
      where: { id },
    });
    return res.json(product);
  }
}
module.exports = new ItemController();
