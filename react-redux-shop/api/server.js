const jsonServer = require('json-server');

const server = jsonServer.create();
const path = require('path');

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/api', jsonServer.defaults(), jsonServer.router('db.json'));


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

server.listen(port, () => {
  console.log('Сервер запущен localhost:3000/api/');
});
