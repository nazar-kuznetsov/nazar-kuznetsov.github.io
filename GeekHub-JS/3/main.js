let express = require('express');
let bodyParser = require('body-parser');
let server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({
  extended: true
}));

server.post('/create-user', require('./controllers/create-user'));
server.post('/create-friend', require('./controllers/create-friend'));

server.listen(8010, () => {
  console.log('Удачно Сервер запущен порт 8010');
});
