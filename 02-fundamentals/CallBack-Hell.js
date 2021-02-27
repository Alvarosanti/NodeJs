const empleados = [
{
    id:1,
    nombre: 'Don cangrejo'
},
{
    id:2,
    nombre: 'Arenita'
},
{
    id:3,
    nombre: 'Bob'
}
];

const salario = [
{
    id:1,
    salario:1000
},
{
    id:2,
    salario:2000
}
];

const getEmpleado = (id,callback) =>{
    const empleado = empleados.find( e => e.id === id)?.nombre;
    if(empleado){
        callback (null,empleado);
    }else{
        callback (`Empleado con id ${id} no existe!`);
    }
}
const getSalario = (id,callback) => {
    const salarios = salario.find(x => x.id ===id)?.salario;
    if(salarios){
        callback (null,salarios);
    }else{
        callback (`No hay salario con id ${id}`)
    }
}
const id = 3;
getEmpleado(id,(err,empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(id,(err,salario) => {  
        if(err){
            return console.log(err);
        }
        // return console.log('El empleado' ,empleado, 'tiene un salario de ',salario);
        return console.log(`El empleado ${empleado} tiene un salario de ${salario}`);

    });
});


// const getEmpleado2 = (id) =>{
//     const empleado = empleados.find((e)=>{
//         return e.id ===id;
//     });
//     return empleado;
// };
// console.log(getEmpleado2(1));



// console.log(getSalario(2))


