const axios = require('axios');
const getLugarLatLng = async(direction) => {
    const encodedUrl = encodeURI(direction);
    // console.log(encodedUrl);

    //let ciudad = argv.direccion;
    let key = '341eea5ebe9cd29fca413bec30c0b882'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${key}`

    const instance = axios.create({
        baseURL: `${url}`,
        //    key = '341eea5ebe9cd29fca413bec30c0b882'
        //timeout: 1000,
        //headers: { 'X-RapidAPI-Key': '341eea5ebe9cd29fca413bec30c0b882'}
    });

    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error(`No hay resultado para ${direction}`)
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng,
}