function calcular()
 {   // nos traemos por del id los elementos introducidos por el usuario //
    let vo = document.getElementById("vo").value;
    let vf = document.getElementById("vf").value;
    let t = document.getElementById("t").value;
    let a = document.getElementById("a").value;
    let d = document.getElementById("d").value;

    // iniciamos las comprobaciones para ver cual de los valores es desconocido //
    if (!vo) // si la variable no tiene un valor asignado, se ejecuta la sentencia,
    //en este caso el valor asignado a la variable se obtiene del elemento del documento HTML con el id "vo".s
    {
        vo = parseFloat(vf) - parseFloat(a) * parseFloat(t);
        document.getElementById("resultado_vo").innerHTML = vo.toFixed(2);
    }
    
    if (!vf)
    {
        vf = parseFloat(vo) + parseFloat(a) * parseFloat(t);
        document.getElementById("resultado_vf").innerHTML = vf.toFixed(2);
    }
    
    if (!t)
    {
        t = (parseFloat(vf) - parseFloat(vo)) / parseFloat(a);
        document.getElementById("resultado_t").innerHTML = t.toFixed(2);
    }

    if (!a)
    {
        a = (parseFloat(vf) - parseFloat(vo)) / parseFloat(t);
        document.getElementById("resultado_a").innerHTML = a.toFixed(2);
    }

    if (!d)
    {
        d = parseFloat(vo) * parseFloat(t) + 0.5 * parseFloat(a) * parseFloat(t) * parseFloat(t);
        document.getElementById("resultado_d").innerHTML = d.toFixed(2);
    }
}

function convertirVelocidad()
{ // number es utilizada para convertir un valor en numero //
    let velocidad_km = Number(document.getElementById("velocidad_km").value);
    let velocidad_metros_segundo = velocidad_km * 1000 / 3600;
    // nan se utiliza para comprobar si un valor no es un numero
    // si velocidad es un numero valido  // 
    if (!isNaN(velocidad_metros_segundo))
    {
        document.getElementById("resultado_velocidad").innerHTML = velocidad_km + " km/h son " + velocidad_metros_segundo + " m/s";    
    }
    else 
    {
        document.getElementById("resultado_velocidad").innerHTML = "Por favor ingrese un valor numérico para la velocidad";
    }
}

function convertirMinutos()
{
    let minutos = Number(document.getElementById("minutos").value);
    let segundos = minutos * 60;

    if (!isNaN(segundos))
    {
        document.getElementById("resultado_minutos").innerHTML = minutos + " minutos son " + segundos + " segundos";
    }
    else
    {
        document.getElementById("resultado_minutos").innerHTML = "Por favor ingrese un valor numérico para los minutos";
    }
}

function convertirKm()
{
    let distancia_km = Number(document.getElementById("distancia").value);
    let distancia_metros = distancia_km * 1000;

    if (!isNaN(distancia_metros))
    {
        document.getElementById("resultado_distancia").innerHTML = distancia_km + " km son " + distancia_metros + " m"; 
    }
    else
    {
        document.getElementById("resultado_distancia").innerHTML = "Por favor ingrese un valor numérico para la distancia"
    }
}
