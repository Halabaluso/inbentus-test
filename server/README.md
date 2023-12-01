# Simple Socket server

This script creates a Socketio server and sends real-time data following the format: `[x, y]` being x and y numbers.

## Installation

```
npm install
```

## Start

Start the server:

```
npm start
```

Run the server in development mode:

```
npm run dev
```

## Environment variables

```
SOCKETIO_TOPIC=plotData
PLOT_DATA_INTERVAL=100
MAX_WAVE_VALUE=50
MIN_WAVE_VALUE=0
```
