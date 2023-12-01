const http = require("http");
const socketIO = require("socket.io");
const { generateValue } = require("./helpers");
require("dotenv").config();

if (!process.env.SOCKETIO_TOPIC || !process.env.PLOT_DATA_INTERVAL) {
  throw new Error("Missing required environment variables");
}

const SOCKETIO_TOPIC = process.env.SOCKETIO_TOPIC;
const PLOT_DATA_INTERVAL = parseInt(process.env.PLOT_DATA_INTERVAL);
const MIN_WAVE_VALUE = parseInt(process.env.MIN_WAVE_VALUE);
const MAX_WAVE_VALUE = parseInt(process.env.MAX_WAVE_VALUE);

const server = http.createServer();
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  let time = 0;
  // Send a message through the topic
  const interval = setInterval(() => {
    socket.emit(SOCKETIO_TOPIC, [
      time,
      generateValue(MAX_WAVE_VALUE, MIN_WAVE_VALUE),
    ]);
    time += PLOT_DATA_INTERVAL;
  }, PLOT_DATA_INTERVAL);

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
    clearInterval(interval);
  });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

