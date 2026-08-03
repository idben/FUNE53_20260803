import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", () => {
    console.log("新的使用者已連線");

});