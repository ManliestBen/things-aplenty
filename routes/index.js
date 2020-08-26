const router = require('express').Router()
const ctrl = require('../controllers/index')

router.get('/', ctrl.index)
router.get('/bananas', ctrl.bananas)
router.get('/llamas', ctrl.llamas)
router.get('/tacos', ctrl.tacos)
module.exports = router;
