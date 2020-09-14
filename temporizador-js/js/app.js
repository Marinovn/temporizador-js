window.onload = Iniciar();

function Iniciar(){
    var fecha = new Date();

    var fecha2 = new Date(document.getElementById("fecha2").value);
    
    const dif = Math.abs(fecha2-fecha);

    const segundost = dif / 1000;

    const dias = Math.floor((segundost / 3600) / 24);

    const horas = Math.floor((segundost / 3600 ) % 24);

    const minutos = Math.floor((segundost / 60 ) % 60);

    const segundos = Math.floor(segundost % 60);

    
    
    var elementDia = document.getElementById('dias');
    var elementHoras = document.getElementById('horas');
    var elementMinutos = document.getElementById('minutos');
    var elementSegundos = document.getElementById('segundos');

    elementDia.innerHTML = dias;
    elementHoras.innerHTML = (horas+3);
    elementMinutos.innerHTML = minutos;
    elementSegundos.innerHTML = segundos;

    if (isNaN(fecha2)) {
        
    }else{
        cambioClase();
    }

    function cambioClase(){
        var tiempoRestante = document.getElementById('tiemporestante');
        tiempoRestante.classList.remove('tiempo');
        tiempoRestante.classList.add('tiempocambio');
    }

}

setInterval(Iniciar, 1000);