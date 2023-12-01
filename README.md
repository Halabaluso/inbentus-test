# Inbentus Frontend - Technical Interview

## Descripción

La prueba consiste en el dibujado de datos en tiempo real usando la librería [Apache Echarts](https://echarts.apache.org/en/index.html). Para ello los datos se recibirán a través del topic `plotData` de socketio con el siguiente formato: Un array de dos posiciones, que representa coordenadas `x` e `y`.

Cualquier modificación del código proporcionado así como la estructura de carpetas se deja a la libre elección del candidato. No siendo necesario modificar en un principio el código presente en la carpeta [server](./server).

**NO siendo obligatorio** se valorará las mejoras que el candidato desee añadir de forma opcional (tests unitarios, pintado a una determinada frecuencia, diseño responsive, etc.).

## Instalación

Instalar modulos de node:

```
npm install
```

## Variables de entorno

Crea el fichero `.env` en la raíz del proyecto con el siguiente contenido:

```
VUE_APP_SOCKET_ADDRESS=ws://localhost:3000

VUE_APP_CHART_MAX_VALUE=50
VUE_APP_CHART_MIN_VALUE=0
VUE_APP_CHART_SECONDS=10
VUE_APP_CHART_YAXIS_INTERVAL=5
```

## Ejecución

```
npm run serve
```

## Servidor

Para arrancar el servidor es necesario instalar los módulos de node necesarios.

```bash
cd server
npm install

# Escucha en el puerto 3000
npm start
```

También es necesario añadir un `.env` en el directorio `server` con las variables de entorno:

```
SOCKETIO_TOPIC=plotData
PLOT_DATA_INTERVAL=100
MAX_WAVE_VALUE=50
MIN_WAVE_VALUE=0
```

## Testing

El objetivo es que se pinten los datos de gráficas, de forma que se borren por completo al iniciar un nuevo barrido. El resultado final debe ser similar al del [vídeo](./video/Screencast%20from%2015-11-23%2014:32:11.webm).

Por tanto deben realizarse las siguientes operaciones:

- [x] Crear componente de gráfica
- [x] Servidor con el envío de datos de Socketio
- [ ] Manejar la recepción de datos en tiempo real
- [ ] Dibujar los datos en la gráfica
- [ ] Borrar los datos recibidos tras cada barrido

## Objetivos

El objetivo de esta prueba es probar la habilidad del candidato para trabajar con Vue y Echarts. De forma que se valorarán aspectos como:

- Patrones de diseño
- Organización del código y limpieza
- Extras (Opcional)

## Referencias

- [Vue 2](https://v2.vuejs.org/)
- [Echarts](https://echarts.apache.org/en/index.html)
- [Typescript](https://www.typescriptlang.org/)
