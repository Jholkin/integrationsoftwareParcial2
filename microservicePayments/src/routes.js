const {Router} = require('express');
const router = Router();
const pagosAPI = require('./pagosAPI');

router.post('/list', pagosAPI.listPay);

module.exports = router;