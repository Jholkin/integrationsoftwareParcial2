const {Router} = require('express');
const router = Router();
const matriculaAPI = require('./marticulaAPI');

router.post('/register', matriculaAPI.register);
router.post('/list', matriculaAPI.listMatricula);

module.exports = router;