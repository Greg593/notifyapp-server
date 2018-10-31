var Rol = require('../models/permiso');
 
exports.getRoles = function(req, res, next){
 
    Rol.find(function(err, roles) {
 
        if (err){
            res.send(err);
        }
 
        res.json(roles);
 
    });
 
}
 
exports.createRol = function(req, res, next){
 
    Rol.create({
        descripcion : req.body.descripcion
    }, function(err, rol) {
 
        if (err){
            res.send(err);
        }
 
        Rol.find(function(err, roles) {
 
            if (err){
                res.send(err);
            }
 
            res.json(roles);
 
        });
 
    });
 
}
 
exports.deleteRol = function(req, res, next){
 
    Rol.remove({
        _id : req.params.rol_id
    }, function(err, rol) {
        res.json(rol);
    });
 
}