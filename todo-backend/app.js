/* importar as configurações do servidor */
var app = require('./config/server').app;
/* parametrizar a porta de escuta */

app.listen(80, function() {
    console.log('servidor iniciado na porta 80');
});