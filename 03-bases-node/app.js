const fs = require('fs');

console.clear();
console.log('=========================');
console.log('tabla del 5');
console.log('=========================');

const base = 1;
let salida = '';
for(let i=0;i <= 10;i++){
    salida += (`${i} x ${base} = ${i*base}\n`);
}
console.log(salida);


fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err) throw err;
    console.log('archivo creado')
})


