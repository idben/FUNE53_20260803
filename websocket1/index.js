import * as fs from "fs";

console.log("Hello World, node.js!");
// setInterval(() => {
//     console.log("Q__Q;");

// }, 3000);

// console.log(document.body); // 不是寫網頁，所以沒有 document, window

const file = "./測試寫入.txt";
const content = "豬腳麵線";
fs.writeFile(file, content, function (error) {
    // 有錯誤產生時會傳入一個物件，沒錯誤時什麼都不會傳
    if (error) {
        console.log("寫入錯誤");
        return;
    }
    console.log("寫入成功");

});