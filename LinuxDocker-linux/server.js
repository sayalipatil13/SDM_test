var express = require('express');
var app = express();
app.use(express.static('public'));
app.get("/", (req, res) => 
{
    res.send ("Welcome to this page!!"); 
});
app.get("/product", (req, res) => 
{
    var p ={ "Title" : "Backpack", "Color" : "Blue", "Price": 800, "Company": "Safari"}
    res.send(p);
});
app.listen(8000);
console.log("Listening on port 8000");


1. git add .
2. git status
3. git commit -m "added"
4. git push


1. sudo apt update
2. ls
3.// sudo apt install
4. sudo apt install docker.io
5. git clone paste url
6. sudo docker build -t appname
7.sudo docker appname
8. sudo docker ps
9.sudo docker run -d -p 8000:8000 appname 
10. copy 8000 on browser
11. sudo docker kill container id
12. sudo docker rmi imageid

