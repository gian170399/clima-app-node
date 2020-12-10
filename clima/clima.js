const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=341eea5ebe9cd29fca413bec30c0b882&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}