import { Server } from "socket.io";

const socketServer = app => {
  const io = new Server(app, {
    cors: {
      origin: "http://localhost:3000",
      // allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });
  io.on("connection", socket => {
    console.log("socket Started", socket.id);






    
    // ondisconnect of socket from application
    socket.on("disconnect", () => {
      console.log("socket Disconnected", socket.id);
    });
  });
};

export default socketServer;
