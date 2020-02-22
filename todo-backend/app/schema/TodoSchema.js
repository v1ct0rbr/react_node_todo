const mongoose = require('mongoose')
var Schema = mongoose.Schema;


const TodoSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Todo", TodoSchema);