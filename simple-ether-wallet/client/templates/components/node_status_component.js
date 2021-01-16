Template.nodeStatusComponent.helpers({

  currentProvider: function(){
    return web3.currentProvider.host;
  },

  isMining: function(){
    return Session.get('isMining');
  },

  currentHashrate: function(){
    return Session.get('hashRate');
  },

  currentPeerCount: function(){
    return Session.get('peerCount');
  }
});
