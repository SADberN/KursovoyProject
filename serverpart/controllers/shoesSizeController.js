const Type = require('../models/models');
class shoesSizeController {
  async addshoessize(req, res) {}
  async getshoesizes(req, res) {
    return res.json(await Type.ShoesSize.findAll());
  }
  async getshoesize(req, res) {}
}
module.exports = new shoesSizeController();
