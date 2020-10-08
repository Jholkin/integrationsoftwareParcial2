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

exports.listMatricula = function(req, res){
    let {curso} = req.body;
    const data = matriculaService.list(curso);
    res.json(data);
}