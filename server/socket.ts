import { Server, Namespace } from "socket.io";
import { AppServer } from "../lib";

const server: AppServer = new Server();
server.on("connect", (socket) => {});

export default server;
