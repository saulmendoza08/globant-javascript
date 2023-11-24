/*1
Es necesario definir e implementar la función celsiusToFahrenheit() 
que toma una serie de temperaturas en grados Celsius y convierte 
la temperatura en grados Celsius dada a Fahrenheit. 
*/

const celsiusToFahrenheit = (tempCelsius)=>{
    const f = (tempCelsius * 1.8) + 32;
    return f;
}
console.log(celsiusToFahrenheit(30));


/*2
Por otro lado, se debe implementar el método .map() para aplicar 
esta función a cada temperatura en el array celsiusTemperatures , 
creando un nuevo array fahrenheitTemperatures con los valores convertidos. 
*/

const celsiusTemperatures = [25, 30, 15, 10, 20];
const fahrenheitTemperatures = celsiusTemperatures.map(celsiusToFahrenheit);



/*3
Finalmente, las matrices de temperatura originales y
convertidas se imprimirán en la consola. 
*/

console.log("Temperaturas en Celsius:", celsiusTemperatures);
console.log("Temperaturas en Fahrenheit:", fahrenheitTemperatures);

/*
Asegúrese de utilizar varias funciones en esta práctica, 
una para convertir de grados Celsius a Fahrenheit y otra para 
obtener los valores iniciales, llame a la función Celsius 
a Fahrenheit e imprima los resultados.
*/

