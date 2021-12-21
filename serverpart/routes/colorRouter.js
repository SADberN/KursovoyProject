const Router = require('express');
const router = new Router();
const colorController = require('../controllers/colorController');

router.post('/addcolor', colorController.addcolor);
router.get('/', colorController.getcolors);
router.get('/:id', colorController.getcolor);
module.exports = router;
