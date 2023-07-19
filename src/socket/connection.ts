import { io } from "socket.io-client";
const socket = io("http://localhost:8000", {
  reconnectionDelayMax: 10000,
  // auth: {
  //   token: "123"
  // },
  // query: {
  //   "my-key": "my-value"
  // }
});
export default socket