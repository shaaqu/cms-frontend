const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angularbootstrap'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/angularbootstrap/index.html'));});
app.listen(process.env.PORT || 8080);
