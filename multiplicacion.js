const argv = require('yargs')
    .command('crear', 'Crear un archivo con la tabla de multiplicar', {
        base: { //recibe como árametro basde que es obligatorio
            demand: true,
            alias: 'b',
            description: 'La base de la tabla de Multiplicar'
        },
        limite: {
            alias: 'l',
            default: 10,
            description: 'El limite de la tabla de multiplicar'
        }

    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar.js')


let comando = argv._[0]

let argv2 = process.argv

console.log(comando);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        console.log("listar...");
        break;
    default:
        console.log("comando no valido!");
}









//importacion simple
//const multiplicar = require('./multiplicar.js');
//Importacion con destructuracion

//Otra forma de Importar

// let base = 8;

// console.log(process.argv); //objeto process
//Opcion Simple

// let parametro = process.argv[2];
// let base = parametro.split('=')[1];

//Segunda Opcion
// let regex = /(\d+)/g;
// let base = process.argv[2].match(regex)

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(e => console.log(e));

//Forma de ejecutar y cambiar base desde terminal    
//node multiplicacion.js --base=9

//Fin segunda forma de importar

// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(e => console.log(e));


//Sigue agregando datos y no los remplaza en el archivo
// fs.appendFile(`tablas/tabla${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`The file tabla${base}.txt has been saved!`);
// });