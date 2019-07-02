const net = require('net');

const client = new net.Socket();

client.connect(8080, '127.0.0.1', () => {
  console.log('connected to tcp server');
  client.write("Hello server! I'm here.");
});

client.on('data', data => {
  console.log('Received' + data);
  client.destroy();
});

client.on('close', () => {
  console.log('client closed');
});
