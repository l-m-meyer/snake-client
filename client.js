const net = require('net');

const clientOptions = {
  host: '165.227.47.243',
  port: 50541
};

const basicSetupForConnection = conn => {
  conn.setEncoding('utf-8');
  conn.write('Name: LMM');
 
  // setInterval(() => {
  //   conn.write('Move: left');
  // }, 550);

  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 500);
};

const handleReceivedData = (data) => {
  console.log('Succesfully connected to game server');
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