import type { Handler } from "vite-plugin-mix";
import app from "./app";
import socket from "./socket";

let attached = false;

export const handler: Handler = (req, res, next) => {
  app(req as any, res as any, next as any);

  if (!attached) {
    socket.attach(req.viteServer.httpServer);
    attached = true;
  }
};
