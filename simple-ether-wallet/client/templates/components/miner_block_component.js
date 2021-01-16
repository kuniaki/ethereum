Template.minerBlockComponent.events({

   "click input[type=submit]": function (e) {
      var template = this;
      e.preventDefault();

      console.log("Start:Miner Event");
      var account = e.target.form.addr.value;
      var password = e.target.form.password.value;
      console.log(account);
      console.log(password);

      if ($(e.target).prop("id") == "start") {
         console.log("start mining");
         web3.personal.unlockAccount(account, password, 600, function (error, result) {

            if (result) {
               web3.miner.start();
            }

         });
      } else if ($(e.target).prop("id") == "stop") {
         console.log("stop mining");
         web3.miner.stop()
         web3.personal.lockAccount(account);
      }

      console.log("END:Miner Event");

   }
});
