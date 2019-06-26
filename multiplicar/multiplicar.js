// Requires

const fs = require('fs');

let listarTabla = (base, limite) => {

    if (!Number(base) || !Number(limite)) {
        console.log('La base proporcionada no es un numero');
        return;
    }

    for (let i = 1; i <= limite; i++) {

        let resultado = base * i;

        console.log(`${base} * ${i} = ${resultado}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('La base proporcionada no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;

            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`Se creo el archivo tabla-${ base }.txt`);
            }


        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};