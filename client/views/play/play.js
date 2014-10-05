Template.play.created = function (e) {
    if (typeof user == 'undefined') {
        Router.go("select");
    }
    else
    {   
      var id = Games.findOne({gameid: user.sync})._id;
      if (id) {
          Games.update({ _id: id},
                       { $push: {user: user} },
                       { upsert: true})
        } else{
          Games.insert({ gameid: user.sync,
                         user: [user],
                         place: 1});
        }       
    }
};

Template.play.rendered = function(e) {
    console.log($('img').position());
    $('img').css("left", -1000)
    $('img').css("top", -(user.num-1) * 640);
    console.log($('img').position());
}

Template.play.events({
    'click #goal': function() {
      var id = Games.findOne({gameid: user.sync})._id;
      var route = function (error) {
              if (error)
                  alert(error.reason);
              else
                  Router.go("finish");
          };
      route();
      // Games.update({ _id: id },
      //     {$inc: {place: 1}},
      //     function (error) {
      //         if (error)
      //             alert(error.reason);
      //         else
      //             Router.go("finish");
      //     });
    }
});

// event listeners for acceleration
window.addEventListener("deviceorientation", function(event) {
    // gamma: left to right
    var leftToRight = event.gamma;
    // beta: front back motion
    var frontToBack = event.beta;

    // left-right motion
    $('img').css("left", function() {
        var pos = parseInt($('img').css("left"));
        if (Math.abs(leftToRight) > 20){
            if ((leftToRight < 0) && (pos <= 0)){
                return pos - leftToRight;
            } else if ((leftToRight > 0) && (pos >= -(5000-(1136*2))) ) {
                return pos - leftToRight;
            }
        }
        return pos;
    });
    $('#goal').css("left", function() {
        var pos = parseInt($('img').css("left"));
        if (Math.abs(leftToRight) > 20){
            if ((leftToRight < 0) && (pos <= 0)){
                return pos - leftToRight;
            } else if ((leftToRight > 0) && (pos >= -(5000-(1136*2))) ) {
                return pos - leftToRight;
            }
        }
        return pos;
    });

    // front-back motion
    $('img').css("top", function() {
        var pos = parseInt($('img').css("top"));
        if (Math.abs(frontToBack) > 20){
          if ((frontToBack < 0) && (pos <= 0)){
              return pos - frontToBack;
          } else if ((frontToBack > 0) && (pos >= -(4000-(640*2)-200)) ) {
              return pos - frontToBack;
          }
        }
        return pos;
        });
    $('#goal').css("top", function() {
        var pos = parseInt($('img').css("top"));
        if (Math.abs(frontToBack) > 20){
          if ((frontToBack < 0) && (pos <= 0)){
              return pos - frontToBack;
          } else if ((frontToBack > 0) && (pos >= -(4000-(640*2)-200)) ) {
              return pos - frontToBack;
          }
        }
        return pos;
    });
});