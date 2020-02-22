var ObjectId = require('mongodb').ObjectId
const TodoSchema = require('../schema/TodoSchema')

class TodoDao {
    constructor() {

    }
    async findById(id) {
        try {
            const todo = TodoSchema.findById(ObjectId(id))
            return todo
        } catch (err) {
            return { message_error: err }
        }
    }

    async findAll() {
        try {
            const lista = await TodoSchema.find()
            return lista
        } catch (err) {
            return { message_error: err }
        }
    }

    async findAllBySort(filtro, response) {
        /* var sortObject = {};
        var stype = req.params.sorttype;
        var sdir = req.params.sortdirection;
        sortObject[stype] = sdir;
        
        test.find().sort(sortObject) */
        var where = {}
        if (filtro.description != null && filtro.description.trim() != "") {
            where.description = { $regex: filtro.description, $options: 'i' }
        }
        if (filtro.done != null && filtro.done.trim() != "") {
            where.done = { $eq: filtro.done }
        }
        var sort = {}
        sort[filtro.orderBy] = filtro.method

        await TodoSchema.find(where).sort(sort).exec(function(err, res) {
            if (err) {
                //console.log(err)
                return response.status(500).json(err)
            } else {
                // console.log(res)
                return response.status(200).json(res)
            }

        })
    }

    async save(todo) {
        var todoSave = new TodoSchema({
            description: todo.description,
        })
        try {
            const savedTodo = await todoSave.save()
            return savedTodo;
        } catch (err) {
            return { message_error: err }
        }
    }
    async update(todo) {
        try {
            const updatedTodo = await TodoSchema.findOneAndUpdate({ _id: todo.id }, { $set: { description: todo.description } }, { new: true })
            return updatedTodo

        } catch (err) {
            return { message_error: err }
        }
    }

    async do(todo) {
        try {
            const updatedTodo = await TodoSchema.findOneAndUpdate({ _id: todo.id }, { $set: { done: todo.done == 'false' ? false : true } }, { new: true })
            return updatedTodo
        } catch (err) {
            return { message_error: err }
        }
    }



    async deleteById(id) {

        try {
            const removedTodo = TodoSchema.findByIdAndDelete({ _id: id })
            return removedTodo
        } catch (err) {
            return { message_error: err }
        }

    }
    async deleteAll() {

        await TodoSchema.deleteMany({}, function(err) {

            return (err) ? { message_error: err } : { message_success: "Coleção apagada" }

        })

    }


}

module.exports = function() {
    return TodoDao;
}