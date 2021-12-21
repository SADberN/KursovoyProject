const kek = require('../models/models');
class clothSizeController {
  async addclothsize(req, res) {}
  async getclothsizes(req, res) {
    return res.json(await kek.ClothSize.findAll());
  }
  async getclothsize(req, res) {}
}
module.exports = new clothSizeController();
