const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
router.post('/addbasket', basketController.addbasket);
router.get('/getbasket', basketController.deletebasket);

module.exports = router;
