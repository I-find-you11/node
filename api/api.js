var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'user'
});

connection.connect();
module.exports = (app) => {
    app.all('*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });


    //登陆请求
    app.get('/login',(req,res)=>{
        res.json({code:200,mes:'登陆成功'});
    })
    
    app.get('/down',(req,res)=>{
        res.download('VitalX config.apk');
    })
}

