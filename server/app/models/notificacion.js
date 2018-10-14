var mongoose = require('mongoose');

var NotificacionHistorySchema = new mongoose.Schema({
    nombre: String,
    dpi: String
});
 
module.exports = mongoose.model('notificacionHistory', NotificacionHistorySchema);