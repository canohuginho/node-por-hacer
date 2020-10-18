const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actulizar', 'Actualiza el estado de un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;
    
module.exports = {
    argv
}