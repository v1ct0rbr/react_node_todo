const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mytodolist", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("Banco de dados conectado");
}).catch((err) => {
    console.log("Erro na conexão com o banco de dados");
});