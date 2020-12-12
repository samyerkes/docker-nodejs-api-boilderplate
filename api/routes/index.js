const basicAuth = require('express-basic-auth')
// const basicAuthUsers = require('../auth.json')
const usersController = require('../controllers').users;
const authenticationController = require('../controllers').authentication;
const verifyJWT = require('../middleware').verifyJWT

module.exports = (app) => {

    app.post('/login', basicAuth({
        users: { 'admin': 'secret' }
    }), authenticationController.login);  

    app.get('/users', verifyJWT, usersController.list);
    app.post('/users', verifyJWT, usersController.create);
    app.get('/users/:userId', verifyJWT, usersController.show);
    app.put('/users/:userId', verifyJWT, usersController.update);
    app.delete('/users/:userId', verifyJWT, usersController.destroy);

}