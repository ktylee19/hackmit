// var place = Games.findOne({gameid: user.sync}).place;
// inc_place();

var inc_place = function() {
	var gameid = Games.findOne({gameid: user.sync}).gameid;
	Games.update({ _id: gameid },
          		{$inc: {place: 1}},
          		false );
}

Template.finish.helpers({
	//var place = Games.findOne({gameid: user.sync}).place;
	//place = place();
	place: function () {
		var place = Games.findOne({gameid: user.sync}).place;
		inc_place();
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