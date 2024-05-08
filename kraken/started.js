const fs = require('fs');
const path = require('path');

const parametro = process.argv[2];

agregarTipoAlArchivo(parametro);

function agregarTipoAlArchivo(nombreArchivo) {
    const directorio = './features';

    if (!isNaN(Number(nombreArchivo))) {

        fs.readdir(directorio, (err, archivos) => {
            if (err) {
                console.error('Error al leer el directorio:', err);
                return;
            }

            const archivoFeature = fs.readdirSync(directorio).find(file => file.charAt(0) === nombreArchivo);
            if(!archivoFeature) {
               console.log("Este numero de funcionalidad no existe")
               return
            }

            archivos.forEach(archivo => {
                const primerCaracter = archivo.charAt(0);
                if (primerCaracter === nombreArchivo) {
                    if(archivo.endsWith('.feature')) {
                        console.log("Esta funcionalidad ya esta seleccionada")
                        return
                    }
                    const nuevoNombre = `${archivo}.feature`;
                    const rutaAntigua = path.join(directorio, archivo);
                    const rutaNueva = path.join(directorio, nuevoNombre);
                    fs.rename(rutaAntigua, rutaNueva, err => {
                        if (err) {
                            console.error('Error al renombrar el archivo:', err);
                            return;
                        }
                        console.log(`Funcionalidad seleccionada: ${archivo}`)
                    });
                } else if (archivo.endsWith('.feature') && archivo != `${nombreArchivo}.feature`) {
                    const nuevaRutaArchivo = path.join(directorio, archivo.slice(0, -8));
                    fs.renameSync(path.join(directorio, archivo), nuevaRutaArchivo);
                }
            });
        });

    } else {
        console.log("Ingrese el numero correspondiente a la funcionalidad")
    }
}