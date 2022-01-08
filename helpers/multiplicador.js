const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {
            console.log('==========================='.green);
            console.log(`\tTabla del`.green, colors.blue(base));
            console.log('==========================='.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

/*
const crearArchivo = (base = 1) => {

    return new Promise((res, rej) => {
        console.log('===========================');
        console.log(`\tTabla del ${base}`);
        console.log('===========================');

        let salida = '';

        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`./tabla-${base}.txt`, salida);
        res(`tabla-${base}.txt`);
    });
}
*/

/*fs.writeFile(`./tabla-${base}.txt`, salida, (err) => {
           if (err) throw err;
       
           console.log(`tabla-${base}.txt creado.`);
       });*/

module.exports = {
    crearArchivo
};