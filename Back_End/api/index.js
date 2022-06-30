const express = require('express');
const routes = require('./routes');
const app = express();
const cors=require('cors');


app.use(cors());
routes(app);


const port = 3000;

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))


module.exports = app;