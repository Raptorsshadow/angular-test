const express = require('express');
const https = require('https');
const fs = require('fs');
const history = require('connect-history-api-fallback');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const auth = require('./authMiddleware');
const router = jsonServer.router('serverdata.json');
const enableHtttps = false;
const ssloptions = {};
if(enableHtttps) {
    ssloptions.cert = fs.readFileSync('./ssl/rootCA.key');
    ssloptions.key = fs.readFileSync('./ssl/rootCA.pem');
}

const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use('/api', router);
app.use(history());
app.use('/', express.static('./dist/SuperStore'));
app.listen(80, () => console.log('HTTP Server running on port 80'));
if(enableHtttps) {
    https.createServer(ssloptions, app).listen(443, () => console.log('HTTPS Server running on port 443'));
} else {
    console.log('HTTPS disabled');
}