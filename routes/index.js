const express = require('express');
const router = express.Router();
//const hora = require('../middlewares/horaMiddleware');
//const validarHora = require('../middlewares/validarHora');

const inicio = `<h1>Bienvenido</h1>`;
const boton = `<button id="endroute" onclick="window.location.href = '/endroute';">Entrar</button>`;



router.get('/', (req, res) => {
    res.send(
        `${inicio}  <br>${res.locals.horaActual} <br><br> ${boton}`
    );
  });

router.get('/index', (req, res) => {
  res.send(
    `${inicio}  <br>${res.locals.horaActual} <br><br> ${boton}`
  );
});

router.use( (req, res) => {
  console.log(req.url);
    //console.log(req.params.mensaje);
    res.status(400).send(`${inicio}  <br>${res.locals.horaActual} <br><br> Aun no es la hora, espera hasta las 12:00 <br><br> ${boton}`);
  });
  

module.exports = router;