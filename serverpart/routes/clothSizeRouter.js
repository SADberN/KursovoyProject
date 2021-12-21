const Router = require('express');
const router = new Router();
const clothSizeController = require('../controllers/clothSizeController');

router.post('/addclothsize', clothSizeController.addclothsize);
router.get('/', clothSizeController.getclothsizes);
router.get('/:id', clothSizeController.getclothsize);
module.exports = router;
