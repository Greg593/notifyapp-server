var mongoose = require('mongoose');

var PermisoSchema = new mongoose.Schema({
 
    descripcion: {
        type: String,
        required: true
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Permiso', PermisoSchema);