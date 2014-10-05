Template.finish.helpers({
	place: function () {
		return place;
	},
	ending: function() {
		switch (place) {
			case 1:
				return "st";
				break;
			case 2:
				return "nd";
				break;
			case 3:
				return "rd";
				break;
			default:
				return "th";
		}
	}
});

Template.finish.events({
	'click .btn': function () {
		user._id = Users.insert(user)
		Router.go("waiting");
	}
});