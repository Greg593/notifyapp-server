var mongoose = require('mongoose');

var AlertaSchema = new mongoose.Schema({
 
    descripcion: {
        type: String,
        unique: true,
    },
    
    nivel: {
    	type: Number,
    	required: true
    },
    
    icono: {
        type: String
    },

    side: {
        type: String
    },

    color: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Alerta', AlertaSchema);