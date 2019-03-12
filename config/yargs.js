let argv = require('yargs').options({
    direccion:{
        alias:'d',
        demand:true,
        desc:'lugar que se quiere trakear'
    }
}).argv



module.exports ={ 
    argv
}