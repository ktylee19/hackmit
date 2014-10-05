Meteor.publish("userSessions", function() {
  return Users.find();
});