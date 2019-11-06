const fs = require('fs');

let crearArchivo = (base, callback) => {
    return new Promise((resolve, reject) => {

        //validar que sea un numero
        if (!number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';


        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //Guarda los datos en un archivo
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });

    });
}

module.exports = {
    crearArchivo
};