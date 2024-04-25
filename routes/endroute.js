const express = require('express');
const router = express.Router();


const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
  
     res.send(
      `<h1>Ruta final</h1> <br> ¡Bienvenido a la ruta final!  El path es: /route  <br><br> <a href="/">Home</a>`
    );
  });


module.exports = router;