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

exports.list = function(curso){
    console.log(curso);
    const matricula = Matricula.find({ curso: curso }).exec();
    return matricula;
}
