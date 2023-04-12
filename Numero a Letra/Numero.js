function convertirALetra() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    let letra = "";
    switch(numero) {
        case 1:
        letra = "A";
        break;
        case 2:
        letra = "B";
        break;
        case 3:
        letra = "C";
        break;
        case 4:
        letra = "D";
        break;
        case 5:
        letra = "E";
        break;
        default:
        letra = "El número ingresado no es válido. Por favor, ingrese un número del 1 al 5.";
    }
    resultado.innerText = letra;
    }