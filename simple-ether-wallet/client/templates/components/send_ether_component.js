var estimatedFeeInWei =  function(){
  var gas = Session.get('sendEther.estimatedGas');
  var gasPrice = new BigNumber(Session.get('sendEther.currentGasPrice'));
  return gasPrice.mul(gas);
}

var estimationCallback = function(e, res){
    var template = this;
    console.log('Estimated gas: ', res, e);
    if(!e && res) {
        Session.set('sendEther.estimatedGas', res);
    }
};

var getGasPriceCallback = function(e, res){
    var template = this;
    console.log('Current Gas Price in Wei: ', res.toString(10), e);
    if(!e && res) {
        Session.set('sendEther.currentGasPrice', res.toString(10));
    }
};

Template.sendEtherComponent.events({
  'submit form': function(e) {
    var template = this;
    e.preventDefault(); 

    var fundInfo = {
      fAddr: $(e.target).find('[name=f-addr]').val(),
      tAddr: $(e.target).find('[name=t-addr]').val(),
      fpass: $(e.target).find('[name=password]').val(),
      amount: web3.toWei($(e.target).find('[name=amount]').val(),'ether') 
    };

    console.log("************************************");
    console.log($(e.target).find('[name=f-addr]').val());
    console.log("************************************");

    if(EthAccounts.findOne({address: fundInfo.fAddr}, {reactive: false})) {
      Session.set('sendEther.fundInfo', fundInfo);

      var version = web3.version.api;
      console.log("web3 version:"+version);

      web3.eth.estimateGas({from: fundInfo.fAddr, to: fundInfo.tAddr, value: fundInfo.amount}, estimationCallback.bind(template));

      web3.eth.getGasPrice(getGasPriceCallback.bind(template));

      $('#sendConfirmModal').modal('show');
    }
  }
});

Template.sendConfirmModalTemplate.helpers({
  sendAmountInEther: function(){
    var amountEth = web3.fromWei(Session.get("sendEther.fundInfo").amount,'ether');
    return parseFloat(amountEth).toFixed(3);
  },
  fAddr: function(){
    return Session.get("sendEther.fundInfo").fAddr;
  },
  tAddr: function(){
    return Session.get("sendEther.fundInfo").tAddr;
  },
  fee: function(){
    return web3.fromWei(estimatedFeeInWei(),'ether').toString(10);
  }
});


Template.sendConfirmModalTemplate.events({
  'click #send': function(e) {
    e.preventDefault();
    var fundInfo = Session.get("sendEther.fundInfo");

    console.log(fundInfo.fpass);
//  web3.personal.unlockAccount(fundInfo.fAddr,fundInfo.fpass,0);
    web3.personal.unlockAccount(fundInfo.fAddr,fundInfo.fpass,600,function (error,result){

    if(result) {

    console.log(result);
    web3.eth.sendTransaction({
      from: fundInfo.fAddr,
      to: fundInfo.tAddr,
      value: fundInfo.amount
    }, function(error, txHash){ 
      console.log("Transaction Hash:", txHash, error);
      if(!error) {
        Transactions.upsert(txHash, {$set: {
          amount: Session.get("sendEther.fundInfo").amount,
          from: Session.get("sendEther.fundInfo").fAddr,
          to: Session.get("sendEther.fundInfo").tAddr,
          timestamp: getCurrentUnixTime(),
          transactionHash: txHash,
          fee: estimatedFeeInWei().toString(10),
        }});
      } else {
        alert("Ether Transfer Failed");
      }
    });
    $('#sendConfirmModal').modal('hide');
    web3.personal.lockAccount(fundInfo.fAddr,fundInfo.fpass,0);


    }
   });

}});
