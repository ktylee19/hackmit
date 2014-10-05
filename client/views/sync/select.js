Template.select.events({
    'submit form': function(e) {
        e.preventDefault();
        var sync = $(e.target).find('[name=code]').val();
        var num = Users.find({ "sync": sync}).count() + 1;
		user = {
        	sync: sync,
        	num: num,
        };
        user._id = Users.insert(user);
        Router.go('waiting');
  }
});