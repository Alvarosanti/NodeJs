const deadpool = {
    nombre:'wade',
    apellido:'winston',
    poder:'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
// console.log(deadpool.getNombre());

const {nombre,apellido,poder} = deadpool;
console.log(nombre,apellido,poder);

function imprimeHeroe({nombre,apellido,poder}){
    // console.log(nombre,apellido,poder);
}
imprimeHeroe(deadpool);

const heroes = ['deadpool','superman','batman'];
// const h1 = heores[0];
const [h1,h2,h3] = heroes;
console.log(h3)
