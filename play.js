// main file to launch game client
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');

setupInput(connect());