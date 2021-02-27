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

const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000
    }
];

const getEmpleado = (id) =>{
    return new Promise((resolve,reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject (`No existe empleado con id ${id}`);
    });
    
}

const getSalario = (id) =>{
    return new Promise((resolve, reject) => {
        const salario = salarios.find( s => s.id === id)?.salario;
        (salario)
            ?resolve (salario)
            :reject (`No existe salario con id ${id}`); 
    });
}

// classic form
// const getSalario2 = (id) => {
//     const promesa = new Promise((resolve,reject)=> {
//         const salario = salarios.find( sa => sa.id === id)?.salario;
//         if (salario){
//             resolve (salario);
//         }else{
//             reject (`No existe salario con id ${id}`);
//         }
//     });
//     return promesa;
// }


const id = 4;
// getEmpleado(id)
// .then( empleado => console.log(empleado))
// .catch( error => console.log(error));

// getSalario(id)
//     .then( salario => console.log(salario))
//     .catch( error => console.log(error));

// getSalario2(id)
//     .then( salario => console.log(salario))
//     .catch( error => console.log(error));

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log(`El empleado(a) ${empleado} tiene un salario de ${salario}`);
            })
            .catch(error => console.log(error));
    })
    .catch(error => console.log(error));