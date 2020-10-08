const {Router} = require('express');
const router = Router();
const courseService = require('./courseService');

var listCourses = [
    {id:1,name:"matematica"},
    {id:2,name:"lenguaje"},
    {id:3,name:"hisotria"},
    {id:4,name:"construcción"},
    {id:5,name:"requisitos"},
    {id:6,name:"integracion"},
    {id:7,name:"base de datos"},
    {id:8,name:"redes"},
    {id:9,name:"patrones"},
    {id:10,name:"diseño de investigacion"},
];

router.get('/', (req, res)=>{
    res.json({listCourses});
});

module.exports = router;