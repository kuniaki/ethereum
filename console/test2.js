const ip = process.argv[2];
var ipAddress = 'http://'+ip+':8545';
var Web3 = require('web3');
var web3 = new Web3();


const web3Admin = require('web3admin');
web3.setProvider(new web3.providers.HttpProvider(ipAddress));
setTimeout(function(){
    web3Admin.extend(web3)
    var coinbase = web3.eth.coinbase
    var balance = web3.eth.getBalance(coinbase)
    console.log("Coinbase balance", balance.toString(10))
    console.log("*-*-**-*-**-*-**-*-**-*-**-*-**-*-*")
    console.log("Extended web3 [admin]", web3.admin)
    console.log("*-*-**-*-**-*-**-*-**-*-**-*-**-*-*")
    console.log("Extended web3 [debug]", web3.debug)
    console.log("*-*-**-*-**-*-**-*-**-*-**-*-**-*-*")
    console.log("Extended web3 [miner]", web3.miner)
    console.log("*-*-**-*-**-*-**-*-**-*-**-*-**-*-*")
    console.log("Extended web3 [network]", web3.network)
    console.log("*-*-**-*-**-*-**-*-**-*-**-*-**-*-*")
    console.log("Extended web3 [txpool]", web3.txpool)
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log("isMining?", web3.eth.mining)
    console.log("turning off mining", web3.miner.stop())
    console.log("isMining?", web3.eth.mining)
    console.log("turning on mining", web3.miner.start())
    console.log("isMining?", web3.eth.mining)
    console.log("txpool", web3.txpool.status)
}, 1000)
