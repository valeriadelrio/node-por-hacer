const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { description })
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer', {
        description,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', { description })
    .help()
    .argv;

module.exports = {
    argv
}