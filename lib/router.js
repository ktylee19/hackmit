Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('userSessions'); }
});

Router.map(function() {
  this.route('select', { path: '/' });

  this.route('waiting', {
    path: '/sync/',
  })

  this.route('play', {
    path: '/play/',
  });

});

Router.onBeforeAction('loading');