const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemController');

router.post('/additem', itemController.additem);
router.get('/', itemController.getitems);
router.get('/:id', itemController.getitem);

module.exports = router;
