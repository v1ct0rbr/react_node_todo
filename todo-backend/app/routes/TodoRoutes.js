module.exports = function(application) {
    application.get('/api', (req, res) => {
        application.app.controllers.TodoController.findAll(application, req, res);
    });

    application.get('/api/find', (req, res) => {
        application.app.controllers.TodoController.findAllBySort(application, req, res);
    });

    application.get('/api/find/:id', (req, res) => {
        application.app.controllers.TodoController.findById(application, req, res);
    });

    application.post('/api', (req, res) => {

        application.app.controllers.TodoController.save(application, req, res);
    });

    application.put('/api/:id', (req, res) => {

        application.app.controllers.TodoController.update(application, req, res);
    });

    application.put('/api/do/:id', (req, res) => {

        application.app.controllers.TodoController.do(application, req, res);
    });

    application.delete('/api/delete/:id', (req, res) => {

        application.app.controllers.TodoController.delete(application, req, res);
    });
    application.delete('/api/deleteall', (req, res) => {

        application.app.controllers.TodoController.deleteall(application, req, res);
    });



}