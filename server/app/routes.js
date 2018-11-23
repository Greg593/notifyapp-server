var AuthenticationController = require('./controllers/authentication'), 
    AlertasController = require('./controllers/alertas'),
    BusesController = require('./controllers/buses'),
    LineasController = require('./controllers/lineas'),
    PermisosController = require('./controllers/permisos'),
    RolesController = require('./controllers/roles'),
    UsuariosController = require('./controllers/usuarios'),    
    UsrAlertController = require('./controllers/useralerts'), 
    //UsrBusController = require('./controllers/userbuses'), 
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        alertaRoutes = express.Router(),
        busRoutes = express.Router(),
        lineaRoutes = express.Router(),
        permisoRoutes = express.Router(),
        rolRoutes = express.Router(),
        usuarioRoutes = express.Router(),
        usrAlertRoutes = express.Router();
              

    // --------------------------- RUTEOS ---------------------------------- //
     
    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
 
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });


    //Alertas
    apiRoutes.use('/alertas', alertaRoutes);
    alertaRoutes.get('/', AlertasController.getAlertas);
    alertaRoutes.post('/', requireAuth, AlertasController.createAlerta);
    alertaRoutes.delete('/:alerta_id', requireAuth, AlertasController.deleteAlerta);

    //Buses
    apiRoutes.use('/buses', busRoutes);
    busRoutes.get('/', BusesController.getBuses);
    busRoutes.post('/', BusesController.createBus);
    busRoutes.delete('/:bus_id', BusesController.deleteBus);

    //Lineas
    apiRoutes.use('/lineas', lineaRoutes);
    lineaRoutes.get('/', LineasController.getLineas);
    lineaRoutes.post('/', LineasController.createLinea);
    lineaRoutes.delete('/:alerta_id', LineasController.deleteLinea);    

    //Permisos
    apiRoutes.use('/permisos', permisoRoutes);
    permisoRoutes.get('/', PermisosController.getPermisos);
    permisoRoutes.post('/', PermisosController.createPermiso);
    permisoRoutes.delete('/:permiso_id', PermisosController.deletePermiso);       

    //Roles
    apiRoutes.use('/roles', rolRoutes);
    rolRoutes.get('/', RolesController.getRoles);
    rolRoutes.post('/', RolesController.createRol);
    rolRoutes.delete('/:rol_id', RolesController.deleteRol);     

     //Alertas por Usuario
    apiRoutes.use('/useralerts', usrAlertRoutes);
    //usrAlertRoutes.get('/', UsrAlertController.getUserAlert);
    usrAlertRoutes.post('/', UsrAlertController.createUsuarioAlerta);
    //usrAlertRoutes.delete('/:useralert_i1d', UsrAlertController.deleteUserAlert);     

 /*   //Buses por Usuario
    apiRoutes.use('/userbuses', usrBusRoutes);
    usrBusRoutes.get('/', UsrBusController.getUserBus);
    usrBusRoutes.post('/', UsrBusController.createUserBus);
    usrBusRoutes.delete('/:useralert_id', UsrBusController.deleteUserBus);     */

    // Usuarios Routes
    apiRoutes.use('/usuarios', usuarioRoutes);        
    usuarioRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user','administrator']), UsuariosController.getUsuarios);
    usuarioRoutes.get('/:usuario_id', requireAuth, AuthenticationController.roleAuthorization(['user','administrator']), UsuariosController.getUsuario);
    usuarioRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['user','administrator']), UsuariosController.createUsuario);
    usuarioRoutes.delete('/:usuario_id', requireAuth, AuthenticationController.roleAuthorization(['administrator']), UsuariosController.deleteUsuario);

    // Set up routes
    app.use('/api', apiRoutes);     
}