const asyncLocalStorage = require("./als.service");
const logger = require("./logger.service");

var gIo = null;
var gSocketBySessionIdMap = {};

function emit({ type, data }) {
  gIo.emit(type, data);
}

function connectSockets(http, session) {
  gIo = require("socket.io")(http);

  const sharedSession = require("express-socket.io-session");

  gIo.use(
    sharedSession(session, {
      autoSave: true,
    })
  );
  gIo.on("connection", (socket) => {
    // console.log("socket.handshake", socket.handshake);
    gSocketBySessionIdMap[socket.handshake.sessionID] = socket;
    socket.on("disconnect", (socket) => {
      console.log("Someone disconnected");
      if (socket.handshake) {
        gSocketBySessionIdMap[socket.handshake.sessionID] = null;
      }
    });
    socket.on("join poll", (pollId) => {
      if (socket.pollId === pollId) return;
      if (socket.pollId) {
        socket.leave(socket.pollId);
      }
      socket.join(pollId);
      // logger.debug('Session ID is', socket.handshake.sessionID)
      socket.pollId = pollId;
      console.log('socket pollid', socket.pollId)
    });

    socket.on("update poll", (savedPoll) => {
      console.log("socket poll update", socket.pollId);
      socket.to(socket.pollId).emit("poll updated", savedPoll);
    });
  });
}

// Send to all sockets BUT not the current socket
function broadcast({ type, data }) {
  const store = asyncLocalStorage.getStore();
  const { sessionId } = store;
  if (!sessionId)
    return logger.debug(
      "Shoudnt happen, no sessionId in asyncLocalStorage store"
    );
  const excludedSocket = gSocketBySessionIdMap[sessionId];
  if (!excludedSocket)
    return logger.debug(
      "Shouldnt happen, No socket in map",
      gSocketBySessionIdMap
    );
  excludedSocket.broadcast.emit(type, data);
}

module.exports = {
  connectSockets,
  emit,
  broadcast,
};
