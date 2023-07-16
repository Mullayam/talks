import app from "./main/app.js";
import socketServer from "./main/socket/SocketStore.js";
// listening socket events
socketServer()


//  listening for application Server
app.listen(8000,()=>console.log("App listening on port 8000"))