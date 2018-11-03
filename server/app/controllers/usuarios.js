var Usuario = require('../models/usuario');
 
exports.getUsuarios = function(req, res, next){
 
    Usuario.find(function(err, usuarios) {
 
        if (err){
            res.send(err);
        }
 
        res.json(usuarios);
 
    });
 
}
 
exports.createUsuario = function(req, res, next){
 
    Usuario.create({
        nombre : req.body.nombre, 
        email: req.body.email,
        password: req.body.password,
        dpi: req.body.dpi

    }, function(err, usuario) {
 
        if (err){
            res.send(err);
        }
 
        Usuario.find(function(err, usuarios) {
 
            if (err){
                res.send(err);
            }
 
            res.json(usuarios);
 
        });
 
    });
 
}
 
exports.deleteUsuario = function(req, res, next){
 
    Usuario.remove({
        _id : req.params.usuario_id
    }, function(err, usuario) {
        res.json(usuario);
    });
 
}