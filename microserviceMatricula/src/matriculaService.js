const Matricula = require('./matricula');

exports.register = function(params){
    try {
        let {curso, alumno} = params;
        const matricula = new Matricula({
            curso: curso,
            alumno: alumno
        });
        matricula.save();
        return {course:curso, alumn:alumno};
    } catch (error) {
        throw error
    }
}

exports.list = async function(params){
    console.log(params);
    const matricula = await Matricula.find({ alumno: params.alumno }).lean().exec();
    return matricula;
}
