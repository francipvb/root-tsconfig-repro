import type { AppServer, Client } from "../../lib";
import setupChat from "./chat";

export default function setupListeners(server: AppServer, socket: Client) {
  setupChat(server, socket);
}
