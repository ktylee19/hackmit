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
    console.log($('img').position());
    $('img').css("left", -1000)
    $('img').css("top", -(user.num-1) * 640);
    console.log($('img').position());
}

Template.play.events({
    'click #goal': function() {
        winner = true;
        Router.go("finish");
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
    $('img').css("left", function() {
        var angle = parseInt($('img').css("left"));
        if (Math.abs(leftToRight) > 20)
            return angle - leftToRight;
        else
            return angle;
    });
    $('#goal').css("left", function() {
        var angle = parseInt($('img').css("left"));
        if (Math.abs(leftToRight) > 20)
            return angle - leftToRight;
        else
            return angle;
    });

    // front-back motion
    $('img').css("top", function() {
        var angle = parseInt($('img').css("top"));
        if (Math.abs(frontToBack) > 20)
            return angle - frontToBack;
        else
            return angle;
        });
    $('#goal').css("top", function() {
        var angle = parseInt($('img').css("top"));
        if (Math.abs(frontToBack) > 20)
            return angle - frontToBack;
        else
            return angle;
    });
});