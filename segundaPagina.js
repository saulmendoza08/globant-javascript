//parte1

for (let i = 1; i < 21; i++) {
    let mensaje = "";
    if (i%2==0) {
        mensaje += i + " es par ";
    }else{
        mensaje += i + " es impar ";
    }
    if (i%5==0) {
        mensaje += "y ademas es divisible por 5";
    }
 
    console.log(mensaje);   
}

//parte 2 numero primo

console.log("----------------------------------SEPARADOR");
let numero = 7;
function isPrimo(num) {
    let x =1;
    contador =0;
    while (x<=num) {
        if (num%x == 0 ) {
            contador+=1;
        }
        x+=1;
    }

    if (contador==2) {
        return true;
    }else{
        return false;
    }
}

if(isPrimo){
    console.log(numero + " es primo");
}else{
    console.log(numero + " NO es primo");
}
