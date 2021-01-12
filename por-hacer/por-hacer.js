const fs = require('fs');

let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, err => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const loadDB = () => {
    0
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const crear = (description) => {
    loadDB();

    let porHacer = {
        description,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    saveDB();

    return porHacer;

}

const getListado = () => {
    loadDB();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    loadDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }

}

const delette = (description) => {
    loadDB();
    const index = listadoPorHacer.findIndex(task => task.description === description);
    if (index > -1) {
        listadoPorHacer.splice(index, 1);
        saveDB(listadoPorHacer);
        return true
    } else {
        return false
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    delette
}