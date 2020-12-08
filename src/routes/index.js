const usersController = require('../controllers').users;

module.exports = (app) => {

    app.post('/users', usersController.create);
    app.get('/users', usersController.list);
    app.get('/users/:userId', usersController.show);
    app.put('/users/:userId', usersController.update);
    app.delete('/users/:userId', usersController.destroy);

}