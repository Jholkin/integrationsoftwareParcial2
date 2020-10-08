const { model, Schema } = require('mongoose');
const schema_jsonSchema = require('mongoose-schema-jsonschema/lib/schema');

const SchemaMatricula = new Schema({
    id: {
        type: Number
    },
    curso: {
        type: String,
        required: true,
    },
    alumno: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
})

module.exports = model('matricula', SchemaMatricula);