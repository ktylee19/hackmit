Meteor.publish('positions', function () {
	return Positions.find();
});