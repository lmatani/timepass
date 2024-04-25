const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');
const hora = require('./middlewares/horaMiddleware');

app.use(hora);
app.use('/endroute', endrouteRouter);
app.use('/', indexRouter);


app.listen(3000, () => {
  console.log('El servdior está escuchando en http://localhost:3000');
});
