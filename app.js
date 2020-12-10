const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

//console.log(argv.direccion);
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);
//clima.getClima(40.71, -74.01).then(console.log).catch(console.log);

const getInfo = async(direccion) => {
    try {
        //entrada
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        //salida
        return `El clima de ${coords.direccion} es de ${temp}° grados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);