const {Perro, mostrarPerro} = require('./perro');
const readlineSync = require('readline-sync');

const jaula = [];

console.log('BIENVENIDO A LA VETERINARIA DE JOAQUIN:');

const cantidadDePerrosAIngresar = readlineSync.question('Por favor, ingrese la cantidad de perros que va a depositar en las jaulas: ');

const registroDePerros = () =>{
    for(let i=0; i < cantidadDePerrosAIngresar; i++){
        let nombrePerro = readlineSync.question('Ingrese el nombre del perro '+(i+1)+ ' ingresar: ');
        let edadPerro = readlineSync.question('Ingrese la edad de '+ nombrePerro +': ');
        let estadoPerro = readlineSync.question(`Ingrese el estado en que se encuentra ${nombrePerro}: `);

        let nuevoPerro = new Perro(nombrePerro,estadoPerro,edadPerro);

        jaula.push(nuevoPerro);
        console.log('--------------------------------');
    }

}

const mostrarJaula = (arreglo) =>{
    console.log('EN LA VETERINARIA DE JOAQUIN SE ENCUENTRAN: ');

    for(let i=0; i < arreglo.length; i++){
        console.log('Dentro de la jaula numero '+ (i+1)+ ' se encuentra: ');
        mostrarPerro(arreglo[i]);
    }
    
}

registroDePerros();
console.log('-----------------------------------------------');
mostrarJaula(jaula);