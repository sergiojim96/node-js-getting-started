const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use('/', express.static(__dirname + '/'));
//app.get('/', (req, res) => res.render('index'));
app.get('/favicon.ico', (req, res) => res.status(204));
app.listen(process.env.port || 5000);
