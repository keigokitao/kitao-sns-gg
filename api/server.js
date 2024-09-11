//expressモジュールを代入
const express = require("express");//requireはnode.jsでモジュールを読み込むための関数
const app = express();

const PORT =5000;

//api作成
app.get("/" ,(req,res) =>{
    res.send("<h1>Hello</h1>")
});

//app.listenはメソッドで作成したアプリケーションを指定したポートで起動する
app.listen(PORT,() => console.log(`server is running on Port ${PORT}`));