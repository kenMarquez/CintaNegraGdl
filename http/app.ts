/**
 * Created by ken on 25/09/17.
 */

// var message = "Hello World"
// console.log(message)
// document.body.innerHTML = message;

var req = new XMLHttpRequest();

//Ponemos el escuchador para capturar la respuesta de la solicitud
req.onload = function (e) {

    var respose = req.response;
    // var nameRepo = respose[0].name;
    var name = respose.name
    // console.log(nameRepo);
    console.log(name);
    console.log(respose)

}

/**
 * Primer parametro el metodo que utilizaremos
 * Segundo la ruta donde haremos la solicitud
 */
req.open("GET", "https://api.github.com/users/kenMarquez")
/**
 * Tipo de respuesta aceptada
 */
req.responseType = "json"
/**
 * Ejecutamos el request
 */
req.send()
