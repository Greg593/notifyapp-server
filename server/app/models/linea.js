var mongoose = require('mongoose');

var LineaSchema = new mongoose.Schema({
 
    descripcion: {
        type: String,
        required: true,
        unique: true,
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('LineaBus', LineaSchema);