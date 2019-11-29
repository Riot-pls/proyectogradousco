const mongoose = require('mongoose');
const { Schema } = mongoose;


const typeTemplateSchema = new Schema ({
    plantillas:         { type: String, require: true },
    codigo:             { type: String, require: true },
    usuario_id:         { type: String, require: true },
    usuario:            { type: String, require: true },
    descripcion:        { type: String, require: true },
    estado:             { type: String, default: 'A' },
    fecha_creado:       { type: String, default: Date.now },
    fecha_actualizado:  { type: String, default: Date.now },
});

module.exports = mongoose.model('TypeTemplate', typeTemplateSchema);