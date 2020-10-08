const pagosService = require('./pagosService');

exports.listPay = async function(req, res){
    try {
        let params = req.body;
        const data = await pagosService.listPay(params);
        res.json(data);
    } catch (error) {
        res.send(error);
    }
}
