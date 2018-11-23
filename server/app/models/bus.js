var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Linea = mongoose.model('LineaBus')

var BusSchema = new Schema({
    nombre: {
	    type: String,
	    lowercase: true,
		required: true,
		unique: true,
    },
    placa: {
    	type: String,
	    lowercase: true,
	    required: true
	},
    centra: {
    	type: String,
	    lowercase: true,
	    required: true
    },
    qr: {
    	type: String,
	    lowercase: true	    
    },    
    linea: {
    	type: Schema.ObjectId, ref: 'LineaBus'
    }
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Bus', BusSchema);