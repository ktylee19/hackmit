Meteor.publish("userSessions", function() {
  return Users.find();
});

Meteor.publish("games", function() {
  return Games.find();
});