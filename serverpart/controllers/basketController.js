const kek = require('../models/models.js');
class BasketController {
  async addbasket(req, res) {
    const { id } = req.query;
    const { prodid } = req.query;
    const { address } = req.query;
    const { name } = req.query;
    const { count } = req.query;
    const typek = await kek.Basket.create({ id, prodid, address, name, count });
    return res.json({ typek });
  }
  async deletebasket(req, res) {}
}
module.exports = new BasketController();
