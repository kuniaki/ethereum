initSessionVars = function(){

Session.setDefault('isMining', false);
Session.setDefault('hashRate', 0);
Session.setDefault('peerCount', 0);

var initialFundInfo = {
  amount:0,
  fAddr:0x0,
  tAddr:0x0,
};
Session.setDefault("sendEther.fundInfo", initialFundInfo);
Session.setDefault("sendEther.estimatedGas", 0);
Session.setDefault("sendEther.currentGasPrice", 0);

};
