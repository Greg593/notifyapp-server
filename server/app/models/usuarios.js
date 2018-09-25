var mongoose = require('mongoose');

var UsuariosSchema = new mongoose.Schema({
    nombre: String,
    dpi: String
});
 
module.exports = mongoose.model('usuarios', UsuariosSchema);