Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('userSessions') && Meteor.subscribe('games'); }
});

Router.map(function() {
  this.route('select', { path: '/' });

  this.route('waiting', {
    path: '/sync/',
  })

  this.route('play', {
    path: '/play/',
  });

  this.route('finish', {
    path: '/end/',
  });

});

Router.onBeforeAction('loading');