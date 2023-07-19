import socket from "../socket/connection";

const  SocketEvents = ()=>{
    socket.on("connect", () => {console.log("starte")}); 
}
export default SocketEvents