import { Server } from "socket.io";
import { Socket } from "socket.io-client";
export interface ClientEvents {}
export interface ServerEvents {}
export interface PrivateEvents {}

export interface IOSession {}

export type AppServer = Server<
  ClientEvents,
  ServerEvents,
  PrivateEvents,
  IOSession
>;

export type AppSocket = Socket<ServerEvents, ClientEvents>;
