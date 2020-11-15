const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const { argv } = require('./config/yargs.js');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log('Tabla mostrada correctamente'))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}