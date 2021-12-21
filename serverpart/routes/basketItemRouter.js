const Router = require('express');
const router = new Router();
const basketItemController = require('../controllers/basketItemController');
router.post('/addbasketitem', basketItemController.addbasketitem);
router.get('/', basketItemController.getbasketitems);
router.post('/delete', basketItemController.deletebasketitems);
router.post('/deleteitem', basketItemController.deletebasketitem);
module.exports = router;
