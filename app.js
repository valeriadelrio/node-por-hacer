const colors = require('colors');

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log('Crear por hacer', tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea = 0; tarea < listado.length; tarea++) {
            console.log('=====Por Hacer====='.green);
            console.log(listado[tarea].description);
            console.log('Estado: ', listado[tarea].completado);
            console.log('=============='.green);


        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log('Actualiza una tarea por hacer', actualizado);
        break;

    case 'borrar':
        let deleted = porHacer.delette(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}