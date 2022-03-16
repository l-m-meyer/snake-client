const net = require('net');
const { IP, PORT } = require('./constants');

const clientOptions = {
  host: '165.227.47.243',
  port: 50541
};

const basicSetupForConnection = conn => {
  conn.setEncoding('utf-8');
  conn.write('Name: LMM');
};

const handleReceivedData = (data) => {
  console.log('Succesfully connected to game server');
  console.log('Server says: ', data);
};

//establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({ 
    host: IP, 
    port: PORT 
  });

  // interpret incoming data as text
  basicSetupForConnection(conn);

  conn.on('data', (data) => {
    handleReceivedData(data);
  });

  return conn;
};

module.exports = { connect };