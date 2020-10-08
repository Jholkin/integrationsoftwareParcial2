const fetch = require('node-fetch');
const Pagos = require('./pagos');

exports.listPay = async function(param){
    try {
        const getList = await fetch('http://localhost:5000/api/matricula/list', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(param)
        });
        return balance = await getList.json();
    } catch (error) {
        throw error;
    }
}

