let argv = require('./config/yargs').argv
let {getLocalizacion} = require('./geoLocalizacion/locaclizacion')
let {getClima} = require('./clima/clima')

// getLocalizacion(argv.direccion)
//     .then(respuesta => console.log(respuesta))
//     .catch(err => console.log(`${err}`))

// getClima("9.410000","-74.029999")
//     .then(respuesta => console.log(respuesta))
//     .catch(err => console.log('err',err))
// ;

let getInfo = async(direccion) => {
    let locaclizacion = await getLocalizacion(direccion)
    let clima = await getClima(locaclizacion.latitud,locaclizacion.longitud)

    return {
        locaclizacion,
        clima,
    }
}

getInfo(argv.direccion)
    .then(resp=>console.log(resp))
    .catch(err=>console.log(err))