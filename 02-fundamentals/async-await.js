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
const id = 4;

const getInfoUsuario = async(id) =>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El emplead@ ${empleado} tiene un salario de ${salario}`;
    } catch (error) {
        throw error;        
    }
}

getInfoUsuario(id)
    .then(msg => {
        console.log('BIEN');
        console.log(msg) ;
    })
    .catch(error => {
        console.log('MAL');
        console.log(error);
    });
