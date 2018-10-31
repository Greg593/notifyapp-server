var Permiso = require('../models/permiso');
 
exports.getPermisos = function(req, res, next){
 
    Permiso.find(function(err, permisos) {
 
        if (err){
            res.send(err);
        }
 
        res.json(permisos);
    });
 
}
 
exports.createPermiso = function(req, res, next){
 
    Permiso.create({
        descripcion : req.body.descripcion      
    }, function(err, permiso) {
 
        if (err){
            res.send(err);
        }
 
        Permiso.find(function(err, permisos) {
 
            if (err){
                res.send(err);
            }
 
            res.json(permisos);
 
        });
 
    });
 
}
 
exports.deletePermiso = function(req, res, next){
 
    Permiso.remove({
        _id : req.params.permiso_id
    }, function(err, permiso) {
        res.json(permiso);
    });
 
}