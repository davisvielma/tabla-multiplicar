const colors = require('colors');
const argv  = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicador');

console.clear();

const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
