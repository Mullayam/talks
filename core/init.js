import app from "./main/app.js";
import socketServer from "./main/socket/SocketStore.js";

//  listening for application Server
const server = app.listen(8000, () => {
  console.log("App listening on port 8000");
});
// listening socket events
socketServer(server);
