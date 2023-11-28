const { default: axios } = require("axios");

/*
Necesitamos definir una función llamada fetchData que tome una URL de parámetro, que represente la URL desde la cual recuperar datos.

Una vez creada la función fetchData creamos una nueva promesa y dentro de su constructor usamos la función setTimeout para simular un retraso de 2 segundos. 
 
Después del retraso, resolvamos aleatoriamente la promesa con un objeto de datos simulado o la rechacemos con un objeto de error simulado.
Fuera del constructor Promise, devuelve la promesa creada.

Finalmente, llamemos a la función fetchData con una URL y manejemos los casos resueltos y rechazados usando .then() y .catch() .

La URL y los datos simulados se pueden definir con una URL de API, como https://swapi.dev/ ; 
opcionalmente, agregue el uso de una biblioteca como Axios o Chai HTTP, 
para recuperar correctamente los datos a través de servicios API.
*/
function fetchData(url) {
  if (typeof url === "")
    return Promise.reject(`Error en la url ingresada: ${url}`);
  promecita = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        url: url,
        resultado: "La dureccion url es " + url,
      });
    }, 2000);
  });

  return promecita;
}





/*omito la ejecion para que se mas claro porque voy a crear una promesa con axios
fetchData("https://swapi.dev/")
    .then((objeto)=>{
        console.log("Inicio de la promesa");
        console.log(`Promesa: ${objeto.url}, ${objeto.resultado}`);
    })
    .catch(err => console.error (err));
*/

//version adicional con axios (librerias externas)

axios.get("https://swapi.dev/api/people/1")
    .then(respuesta => {
        console.log(typeof(respuesta));

        let json =  respuesta.data;
        console.log (`El personaje es : ${json.name}`)
    })
    .catch((error)=>console.log("respuesta: " + error))
    .finally(console.log("Finde la utilizacion de axios."));


//-------------------------------------------------------------


const request = require('request')
function fetchApi(url){
  const promesa = new Promise((resolve, reject)=>{
    request(url, {json:true},(error,resp, body)=>{
      if(resp.statusCode === 200){
        resolve(body);
      }else{
        reject("no se pudo resolver la promesa correctamente")
      }
    })
  });
  return promesa
};

//llamando la promesa

fetchApi("https://swapi.dev/api/people/1")
  .then(res => console.log(res))
  .catch(error => console.log(error))
