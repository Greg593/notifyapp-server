var Linea = require('../models/linea');
 
exports.getLineas = function(req, res, next){
 
    Linea.find(function(err, lineas) {
 
        if (err){
            res.send(err);
        }
 
        res.json(lineas);
    });
 
}
 
exports.createLinea = function(req, res, next){
 
    Linea.create({
        descripcion : req.body.descripcion        
    }, function(err, linea) {
 
        if (err){
            res.send(err);
        }
 
        Linea.find(function(err, lineas) {
 
            if (err){
                res.send(err);
            }
 
            res.json(lineas);
 
        });
 
    });
 
}
 
exports.deleteLinea = function(req, res, next){
 
    Linea.remove({
        _id : req.params.linea_id
    }, function(err, linea) {
        res.json(linea);
    });
 
}