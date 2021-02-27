

// setTimeout(()=> {
//     console.log('Hola mundo');
// },1000);

const getUsuarioById = (id, callback1) =>{
    const usuario ={
        id,
        nombre: 'Alvaro'
    }
    setTimeout(() => {
        callback1(usuario);
    },1500);
}
getUsuarioById(10, ( usuario )=>{
    console.log(usuario.id),
    console.log(usuario.nombre.toUpperCase()); 
});