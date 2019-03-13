const axios = require('axios')

const getClima = async(lan,lon) =>{

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=7cb4cf138178b0f216295604fd93202d&units=metric`)

    if(respuesta.data.length <=0){
        throw(`No existen datos`)
    }
    return respuesta.data.main
}

module.exports ={ 
    getClima
}