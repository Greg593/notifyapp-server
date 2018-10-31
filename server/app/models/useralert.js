var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuario');
var Alerta = mongoose.model('Alerta');

var UsuarioAlertaSchema = new mongoose.Schema({
 
    fecha: {
        type: Date,        
        unique: true,
        required: true
    },
    coordenadas: {
        type: String,
        required: true
    },
    estado: {
    	type: String,
    	required: true
    },
    user: {
    	type: Schema.ObjectId, ref: "Usuario"
    },
    alerta: {
    	type: Schema.ObjectId, ref: "Alerta"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UsuarioAlerta', UsuarioAlertaSchema);