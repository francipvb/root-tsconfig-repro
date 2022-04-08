import { Server, Socket as ServerSocket } from "socket.io";
import { Socket } from "socket.io-client";

export interface ClientEvents {
  message: (msg: string) => void;
}
export interface ServerEvents {
  message: (message: { user: string; message: string }) => void;
  login: (user: string) => void;
  logout: (user: string) => void;
}
export interface PrivateEvents {
  report: (user: string) => void;
}

export interface IOSession {}

export type AppServer = Server<
  ClientEvents,
  ServerEvents,
  PrivateEvents,
  IOSession
>;

export type AppSocket = Socket<ServerEvents, ClientEvents>;
export type Client = ServerSocket<
  ClientEvents,
  ServerEvents,
  PrivateEvents,
  IOSession
>;
