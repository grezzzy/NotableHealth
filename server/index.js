var express = require("express");
var app = express();
var port = 3001;

app.use(express.static('public'));

// app.get('/', (req,res)=> {
//   res.end();
// });

app.listen(port, function () {
    console.log("App is listening to port: " + port);
});