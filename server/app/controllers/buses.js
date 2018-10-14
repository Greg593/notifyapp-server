var Bus = require('../models/bus');
 
exports.getBuses = function(req, res, next){
 
    Bus.find(function(err, buses) {
 
        if (err){
            res.send(err);
        }
 
        res.json(buses);
    });
 
}
 
exports.createBus = function(req, res, next){
 
    Bus.create({
        nombre : req.body.nombre, 
        placa: req.body.placa,
        centra: req.body.centra,
        qr: req.body.qr
    }, function(err, bus) {
 
        if (err){
            res.send(err);
        }
 
        Bus.find(function(err, buses) {
 
            if (err){
                res.send(err);
            }
 
            res.json(buses);
 
        });
 
    });
 
}
 
exports.deleteBus = function(req, res, next){
 
    Bus.remove({
        _id : req.params.bus_id
    }, function(err, bus) {
        res.json(bus);
    });
 
}