import { Server } from "socket.io";

const socketServer = app => {
  const io = new Server(app);
  io.on("connection", socket => {
    console.log("socket Started", socket.id);
  });
};

export default socketServer;
