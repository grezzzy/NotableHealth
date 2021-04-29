const express = require("express");
const app = express();
const port = 3001;
const controller = require("../controller/index")

app.use(express.static('public'));

app.get('/physicians', (req, res)=> {
  controller.getPhys()
    .then(data => res.send(data))
    .catch(err => console.error(err));
});

app.get('/appointments', (req,res)=> {
    let name = req.query.name;
    //should be something to determine today's date for dataset
    let date = '3/1';

    controller.getAppts(name, date)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  });

app.listen(port, function () {
    console.log("App is listening to port: " + port);
});