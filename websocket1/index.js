import WebSocket, { WebSocketServer } from "ws";
// 終端機指令: npm run dev 或 node index.js
// .js 檔有更新，終端機要斷開再重新執行

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (connection) => {
    console.log("新的使用者已連線了哦~~");

    connection.on("message", (message) => {
        console.log(`收到訊息: ${message}`);
        wss.clients.forEach((client) => {
            // 確認連線是否存活
            if (client.readyState == WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    connection.on("close", () => {
        console.log("使用者已斷開連線");
    });
});