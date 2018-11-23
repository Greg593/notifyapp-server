var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioAlertaSchema = new mongoose.Schema({
 
    alerta : {
        type: Object,
        require: true      
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UsuarioAlerta', UsuarioAlertaSchema);