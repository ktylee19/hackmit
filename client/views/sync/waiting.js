Template.waiting.helpers({
	number: function() {
		if (typeof user == 'undefined') { return 0; }
		else {	return user.num; }
	}
});

Template.waiting.created = function (e) {
	if (typeof user == 'undefined') {
		Router.go("select");
	}
};

Template.waiting.events({
    'submit form': function(e) {
        e.preventDefault();
        Users.remove({"_id": user._id});
  }
});