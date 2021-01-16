
const ip = process.argv[2];
var ipAddress = 'http://'+ip+':8545';

 
const address = process.argv[3];
var walletAddress = address;

var Web3 = require('web3');
var web3 = new Web3();


web3.setProvider(new web3.providers.HttpProvider(ipAddress));
var balance = web3.eth.getBalance(walletAddress); //Will give value in.
balance = web3.toDecimal(balance)/1e18;
console.log(balance)
