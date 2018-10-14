var mongoose = require('mongoose');

var BusSchema = new mongoose.Schema({
    nombre: String,
    placa: String,
    centra: String,
    qr: String
});
 
module.exports = mongoose.model('bus', BusSchema);