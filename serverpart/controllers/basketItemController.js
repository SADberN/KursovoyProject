const kek = require('../models/models.js');
class BasketItemController {
  async addbasketitem(req, res) {
    const { id } = req.query;
    const { itemId } = req.query;
    const { name } = req.query;
    const { price } = req.query;
    const { size } = req.query;
    const { color } = req.query;
    const { imageUrl } = req.query;
    const typek = await kek.BasketItem.create({ id, itemId, name, imageUrl, color, size, price });
    return res.json({ typek });
  }
  async getbasketitems(req, res) {
    return res.json(await kek.BasketItem.findAll());
  }
  async deletebasketitems(req, res) {
    const typek = await kek.BasketItem.destroy({
      where: {},
    });
  }
  async deletebasketitem(req, res) {
    const { id } = req.query;
    console.log(id);
    const typek = await kek.BasketItem.destroy({
      where: { id },
    });
  }
}
module.exports = new BasketItemController();
