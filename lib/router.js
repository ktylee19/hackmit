Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
	this.route('select', { path: '/' });

	this.route('waiting', {
		path: '/sync/:_id',
	})

	this.route('play', {
		path: '/play/',
	});

});