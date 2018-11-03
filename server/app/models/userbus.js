var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuario');
var Bus = mongoose.model('Bus');

var UsuarioBusSchema = new mongoose.Schema({
 
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
    	type: Date,
        required: true,
        unique: true,
    },
    user: {
    	type: Schema.ObjectId, ref: "Usuario"
    },
    bus: {
    	type: Schema.ObjectId, ref: "Bus"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UsuarioBus', UsuarioBusSchema);