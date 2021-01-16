
var Web3 = require('web3');
web3 = new Web3();

var version = web3.version.api;
console.log("web3 version:"+version);


//if(!web3.currentProvider)
//web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
if(!web3.currentProvider)
  web3.setProvider(new web3.providers.HttpProvider("http://192.168.11.31:8545"));

const web3Admin = require('web3admin');
setTimeout(function(){
  web3Admin.extend(web3);
},1000)

EthAccounts.init();

EthBlocks.init();

initSessionVars();

Transactions = new Mongo.Collection('transactions', {connection: null});

observeNode();
observeTransactions();
