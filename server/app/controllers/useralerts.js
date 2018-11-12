var UsuarioAlerta = require('../models/useralert');

exports.getUsuarioAlertas = function (req, res, next) {

    Alerta.find(function (err, alertas) {

        if (err) {
            res.send(err);
        }

        res.json(alertas);

    });

}

exports.createUsuarioAlerta = function (req, res, next) {

    UsuarioAlerta.create({
        _id: req.params.useralerta_id
        
        nivel: req.body.nivel
    }, function (err, alerta) {

        if (err) {
            res.send(err);
        }

        UsuarioAlerta.find(function (err, alertas) {

            if (err) {
                res.send(err);
            }

            res.json(alertas);

        });

    });

}

exports.deleteUsuarioAlerta = function (req, res, next) {

    UsuarioAlerta.remove({
        _id: req.params.alerta_id
    }, function (err, alerta) {
        res.json(alerta);
    });

}