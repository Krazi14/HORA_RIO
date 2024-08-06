let mostar_fecha = document.getElementById('fecha');
let mostar_hora = document.getElementById('hora');

let fechaweb = new Date();

let dia_semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles',  'Jueves', 'Viernes', 'Sabado'];
let mes_año = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostar_fecha.innerHTML = `${dia_semana[fechaweb.getDay()]}, ${fechaweb.getDate()} de ${mes_año[fechaweb.getMonth()]} de ${fechaweb.getFullYear()}`

setInterval(()=>{
let horaweb = new Date();
    mostar_hora.innerHTML = horaweb.toLocaleTimeString();
}, 1000);
