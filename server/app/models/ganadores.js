 var mongoose = require('mongoose');

var GanadoresSchema = new mongoose.Schema({
    anio: Number,
    sede: String,
    primer_lugar: String,
    segundo_lugar: String,
    tercer_lugar: String
});
 
module.exports = mongoose.model('ganadores', GanadoresSchema);