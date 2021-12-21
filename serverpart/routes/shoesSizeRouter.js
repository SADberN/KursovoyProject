const Router = require('express');
const router = new Router();
const shoesSizeController = require('../controllers/shoesSizeController');

router.post('/addshoessize', shoesSizeController.addshoessize);
router.get('/', shoesSizeController.getshoesizes);
router.get('/:id', shoesSizeController.getshoesize);
module.exports = router;
