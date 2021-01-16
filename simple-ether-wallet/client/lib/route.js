Router.configure({
  layoutTemplate: 'walletLayout'
});

Router.route('/', function () {
  this.redirect('/dashboard');
});

Router.route('/dashboard', {name: 'dashboard'});
Router.route('/send', {name: 'send'});
Router.route('/mining', {name: 'mining'});
