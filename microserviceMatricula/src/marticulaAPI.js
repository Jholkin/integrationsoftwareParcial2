const matriculaService = require('./matriculaService');

exports.register = function(req, res){
    try {
        let params = req.body;
        const data = matriculaService.register(params);
        res.json(data);
    } catch (error) {
        res.send(error);
    }
}

exports.listMatricula = async function(req, res){
    let alumno = req.body;
    const data = await matriculaService.list(alumno);
    res.json(data);
}