Template.waiting.helpers({
	number: function() {
		if (typeof user == 'undefined') { return 0; }
		else {	return user.num-1; }
	},
	remain: function() {
		if (typeof user == 'undefined') { return 0; }
		else { return Users.find({"sync": user.sync}).count(); }
	}
});

Template.waiting.created = function (e) {
	if (typeof user == 'undefined') {
		Router.go("select");
	}
	else
	{
		totalUsers = Users.find({"sync": user.sync}).count();
	}
};

Template.waiting.events({
    'submit form': function(e) {
        e.preventDefault();
        Users.remove({"_id": user._id});
        // $(".btn").prop('disabled', true);
        // $(".btn").value = "Ready!";

        Router.go("play");
  }
});