// main file to launch game client
const net = require('net');

const clientOptions = {
  host: '165.227.47.243',
  port: 50541
};

const basicSetupForConnection = conn => {
  conn.setEncoding('utf-8');
};

const handleReceivedData = (data) => {
  console.log('Server says: ', data);
};

const connect = () => {
  const conn = net.createConnection(clientOptions);

  // interpret incoming data as text
  basicSetupForConnection(conn);

  conn.on('data', (data) => {
    handleReceivedData(data);
  });

  return conn;
};

module.exports = { connect };