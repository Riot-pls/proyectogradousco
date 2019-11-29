const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = Schema ({
    nombres:                { type: String, require: true },
    apellidos:              { type: String, require: true },
    password:               { type: String, require: true },
    email:                  { type: String, require: true },
    telefono:               { type: String, require: false },
    celular:                { type: String, require: true },
    tipo_usuario:           { type: String, require: true },
    tipo_id:                { type: String, require: true },
    num_documento:          { type: String, require: true },
    genero:                 { type: String, require: true },
    codigo_universitario:   { type: String, require: true },
    sede_universitaria:     { type: String, require: true },
    facultad:               { type: String, require: true },
    programa_universitario: { type: String, require: true },
    estado:                 { type: String, require: true },
    role:                   { type: String, require: true }
});

module.exports = mongoose.model('usuarios', UserSchema);