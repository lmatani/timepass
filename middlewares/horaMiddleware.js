const hora = (req, res, next) => {
    const now = new Date();
    const hours = formatearValor(now.getHours());
    const minuts = formatearValor(now.getMinutes());
    //const seconds = now.getSeconds();
  
    res.locals.horaActual = `La hora actual es ${hours}:${minuts}`;
    //req.horaActual = `La hora actual es ${hours}:${minuts}`;
    next();
  };


function formatearValor(valor){
    return (valor < 10) ? '0' + valor : valor;
}


module.exports = hora;


