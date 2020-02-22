module.exports.findAll = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const resultado = await todoDao.findAll()
    var statusCode = !resultado.hasOwnProperty('message_error') ? 200 : 500
    res.status(statusCode).json(resultado)
}

module.exports.findAllBySort = (application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    var pesquisa = req.query
        // const resultado = todoDao.findAllBySort(pesquisa, res)
    todoDao.findAllBySort(pesquisa, res)

}

module.exports.findById = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const resultado = await todoDao.findById(req.params.id)
    var statusCode = !resultado.hasOwnProperty('message_error') ? 200 : 500
    res.status(statusCode).json(resultado)
}

module.exports.save = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const todo = {...req.body }
    const resultado = await todoDao.save(todo)
    var statusCode = !resultado.hasOwnProperty('message_error') ? 200 : 500
    res.status(statusCode).json(resultado)
}

module.exports.update = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const todo = {...req.body, id: req.params.id }
    const resultado = await todoDao.update(todo)
    var statusCode = !resultado.hasOwnProperty('message_error') ? 200 : 500
    res.status(statusCode).json(resultado)
}

module.exports.do = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const todo = { id: req.params.id, done: req.query.done }
    const resultado = await todoDao.do(todo)
    var statusCode = !resultado.hasOwnProperty('message_error') ? 200 : 500
    res.status(statusCode).json(resultado)
}

module.exports.delete = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const resultado = await todoDao.deleteById(req.params.id)
    var statusCode = !resultado.hasOwnProperty('message_error') ? 200 : 500
    res.status(statusCode).json(resultado)
}
module.exports.deleteall = async(application, req, res) => {
    var todoDao = new application.app.dao.TodoDao()
    const resultado = await todoDao.deleteAll()

    res.json(resultado)
}