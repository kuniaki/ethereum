const ip = process.argv[2];
var ipAddress = 'http://'+ip+':8545';
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(ipAddress));

console.log("response:",web3.personal.lockAccount(web3.eth.coinbase,"tiger1",0));
console.log("response:",web3.eth.accounts);

const web3Admin = require('web3admin');
web3Admin.extend(web3);
console.log("isMining?", web3.eth.mining);
console.log("turning on mining", web3.miner.start());
console.log("isMining?", web3.eth.mining);
