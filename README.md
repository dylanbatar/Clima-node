## App del clima

app para saber el clima con node.js

parametros :

- direccion -d  lugar que quieres consultar

```
ej: node app -d "cali"
```

salida:
```
{ locaclizacion:   
    {   
        nombre: 'Cali, Colombia',
        latitud: '9.410000',
        longitud: '-74.029999' 
    },  
    clima:
    {   
        temp: 24.35,
        pressure: 1008,
        humidity: 83,
        temp_min: 24.35,
        temp_max: 24.35,
        sea_level: 1008,
        grnd_level: 1000.59 
    } 
}
```