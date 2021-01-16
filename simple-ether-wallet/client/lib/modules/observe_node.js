var peerCountIntervalId = null;

var getIsMining = function(){
  web3.eth.getMining(function(e, res){
    if(!e)
      Session.set('isMining', res);
  });
};

var getHashRate = function(){
  web3.eth.getHashrate(function(e, res){
    if(!e)
      Session.set('hashRate', res);
  });
};

var getPeerCount = function(){
  web3.net.getPeerCount(function(e, res){
    if(!e)
      Session.set('peerCount', res);
  });
};

observeNode = function(){
  Meteor.clearInterval(peerCountIntervalId);
  peerCountIntervalId = Meteor.setInterval(function() {
    getIsMining();
    getHashRate();
    getPeerCount();
  }, 1000);
};
