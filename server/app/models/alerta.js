var mongoose = require('mongoose');

var AlertaSchema = new mongoose.Schema({
 
    descripcion: {
        type: String,
        required: true,
        unique: true,
    },
    
    nivel: {
    	type: Number,
    	required: true
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Alerta', AlertaSchema);