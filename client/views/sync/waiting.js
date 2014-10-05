Template.waiting.helpers({
	number: function() {
		if (typeof user == 'undefined') { return 0; }
		else {	return user.num; }
	},
	remain: function() {
		if (typeof user == 'undefined') { return 0; }
		else { return Users.find({"sync": user.sync}).count()-1; }
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
        console.log(user);

        Router.go("play");
  }
});