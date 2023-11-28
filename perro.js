function Perro(nombre,estado,edad){
    this.nombre = nombre;
    this.edad = edad; 
    this.estado = estado; 

    this.anuncioDeRegistro = function(){
        console.log(`El perro ingresado se llama ${this.nombre}, tiene ${this.edad} años y se encuentra ${this.estado}.`);
    }
}

const mostrarPerro = (x) =>{
    console.log(`El perro ${x.nombre} de ${x.edad} años de edad, que se encuentra ${x.estado}`);
}
module.exports = {Perro, mostrarPerro};