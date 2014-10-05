Template.play.created = function (e) {
    if (typeof user == 'undefined') {
        Router.go("select");
    }
    else
    {
        var game = {
            "sync": user.sync,
            place: 1,
        };
        gameid = Games.insert(game);
    }
};

Template.play.rendered = function(e) {
    console.log($('#bg').position());
    $('#bg').css("left", -1000)
    $('#bg').css("top", -(user.num-1) * 640);
    console.log($('#bg').position());
}

Template.play.events({
    'click #goal': function() {
        place = Games.findOne({_id: gameid}).place;
        Games.update(gameid,
            {$set: {"place": place + 1}},
            function (error) {
                if (error)
                    alert(error.reason);
                else
                    Router.go("finish");
            });
    }
});

// event listeners for acceleration
window.addEventListener("deviceorientation", function(event) {
    // alpha: rotation around z-axis
    var rotateDegrees = event.alpha;
    // gamma: left to right
    var leftToRight = event.gamma;
    // beta: front back motion
    var frontToBack = event.beta;

    // left-right motion
    $('#bg').css("left", function() {
        var pos = parseInt($('#bg').css("left"));
        if (Math.abs(leftToRight) > 20){
            if ( !((leftToRight < 0) && (pos <=0)) && !((leftToRight > 0) && (pos >= 1136)) ){
                return pos - leftToRight;
            }
        }
        return pos;
    });
    $('#goal').css("left", function() {
        var pos = parseInt($('#bg').css("left"));
        if (Math.abs(leftToRight) > 20)
            return pos - leftToRight;
        else
            return pos;
    });

    // front-back motion
    $('#bg').css("top", function() {
        var pos = parseInt($('#bg').css("top"));
        if (Math.abs(frontToBack) > 20)
            return pos - frontToBack;
        else
            return pos;
        });
    $('#goal').css("top", function() {
        var pos = parseInt($('#bg').css("top"));
        if (Math.abs(frontToBack) > 20)
            return pos - frontToBack;
        else
            return pos;
    });
});