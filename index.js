const routes = require('./routes');
var cors = require('cors');
const app = require('express')();
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.post('/decode', routes.decode);

app.listen(PORT);
