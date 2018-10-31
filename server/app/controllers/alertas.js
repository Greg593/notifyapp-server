var Alerta = require('../models/alerta');
 
exports.getAlertas = function(req, res, next){
 
    Alerta.find(function(err, alertas) {
 
        if (err){
            res.send(err);
        }
 
        res.json(alertas);

    });
 
}
 
exports.createAlerta = function(req, res, next){
 
    Alerta.create({
        descripcion : req.body.descripcion, 
        nivel: req.body.nivel
    }, function(err, alerta) {
 
        if (err){
            res.send(err);
        }
 
        Alerta.find(function(err, alertas) {
 
            if (err){
                res.send(err);
            }
 
            res.json(alertas);
 
        });
 
    });
 
}
 
exports.deleteAlerta = function(req, res, next){
 
    Alerta.remove({
        _id : req.params.alerta_id
    }, function(err, alerta) {
        res.json(alerta);
    });
 
}