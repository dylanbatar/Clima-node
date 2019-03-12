let argv = require('./config/yargs').argv
let axios = require('axios')
let {getLocalizacion} = require('./geoLocalizacion/locaclizacion')

getLocalizacion(argv.direccion)
    .then(respuesta => console.log(respuesta))