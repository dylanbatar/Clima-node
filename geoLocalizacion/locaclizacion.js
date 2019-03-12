let axios = require('axios')

const getLocalizacion = async (direccion) => {
    //codificar argumentos 
    let encondeURL = encodeURI(direccion)
    //instancia para utilizar la api
    const instacia = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeURL}`,
        //timeout:
        headers:{'X-RapidAPI-Key':'9a9bf64a7fmsh8a02429bf12bd50p1b401bjsn28ab40349088'}
    })
    // utilizar la instacia creada para recibir los datos
    let respuesta = await instacia.get()
    const data = respuesta.data.Results[0]
    
    return{
       data
    }   
}
module.exports={
    getLocalizacion
}