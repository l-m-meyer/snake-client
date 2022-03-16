
const { connect } = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = () => {
  if (key === '\u0003') {
    process.exit();
  }
};



console.log('Connecting...');
connect();