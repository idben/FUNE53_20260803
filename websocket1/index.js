import WebSocket, { WebSocketServer } from "ws";
// 終端機指令: npm run dev 或 node index.js
// .js 檔有更新，終端機要斷開再重新執行

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (connection) => {
    console.log("新的使用者已連線了哦~~");


    connection.on("close", () => {
        console.log("使用者已斷開連線");
    });
});