// Requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('La base o el límite no es un número');
            return; // Rompe la ejecución
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('La base o el límite no es un número');
            return;
        }

        console.log('==================='.green);
        console.log(`Tabla del ${base}`.green);
        console.log('==================='.green);

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(contenido);
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}