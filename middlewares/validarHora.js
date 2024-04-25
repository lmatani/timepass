const validarHora = (req, res, next) => {
    //console.log('hora: ' + req.params.hora);
    const now = new Date();
    const hours = now.getHours();
    const minuts = now.getMinutes();
    
    if (hours >= 12 && hours <= 23) {
        next(); 
    }
    else {
        //res.locals.mensaje = 'Aún no es la hora, tendrás que esperar a las 12:00 para entrar';
        //res.redirect('/error?mensaje=' + encodeURIComponent(res.locals.mensaje))
        res.redirect('/error');
    }
   
  };


module.exports = validarHora;