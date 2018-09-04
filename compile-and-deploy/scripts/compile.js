const path = require('path');
const fs = require('fs');
const solc = require('solc');
const chalk = require('chalk');

const contractPath = path.resolve(__dirname, "../contracts", "UsersContract.sol");
const source = fs.readFileSync(contractPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':UsersContract'];


