
function verificarPalíndromo() //creamos una función
{
  var palabra = document.getElementById("palabra").value; //creamos una varible y llamos el id de html
  var resultado = document.getElementById("resultado"); //llamaos el id de html
  var palabraInvertida = palabra.split("").reverse().join(""); 
  // split divide la palabra en un array de caracteres individuales
  // reverse invierte el orden de los caracteres
  // join une los caracteres invertidos en una sola cadena 
    if (palabra == palabraInvertida) //compara la palabra invertida
    {
      resultado.innerHTML = "La palabra " + palabra + " es un palíndromo.";
    } else 
    {
      resultado.innerHTML = "La palabra " + palabra + " no es un palíndromo.";
      //el objeto innerHTML manipula contenido en html 
    }
}
 
