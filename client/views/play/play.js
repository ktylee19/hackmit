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
    'click #right': function() {
        $('img').css("left", function() {
            var left = parseInt($('img').css("left"));
            if (left < -1800)
                return left;
            else
                return left - 100;
        });
        $('#goal').css("left", function() {
            var left = parseInt($('#goal').css("left"));
            if (left < -1800)
                return left;
            else
                return left - 100;
        });
    },
    'click #up': function() {
        $('img').css("top", function() {
            var top = parseInt($('img').css("top"));
            if (top > -100)
                return top;
            else
                return top + 100;
        });
        $('#goal').css("top", function() {
            var top = parseInt($('#goal').css("top"));
            if (top > -100)
                return top;
            else
                return top + 100;
        });
    },
    'click #down': function() {
        $('img').css("top", function() {
            var up = parseInt($('img').css("top"));
            if (up < -2400)
                return up;
            else
                return up - 100;
        });
        $('#goal').css("top", function() {
            var top = parseInt($('#goal').css("top"));
            if (top < -2400)
                return top;
            else
                return top - 100;
        });
    },
    'click #left': function() {
        $('img').css("left", function() {
            var right = parseInt($('img').css("left"));
            if (right > -100)
                return right;
            else
                return right + 100;
        });
        $('#goal').css("left", function() {
            var top = parseInt($('#goal').css("left"));
            if (top > -100)
                return top;
            else
                return top + 100;
        });
    },
    'click #goal': function() {
        winner = true;
        Router.go("finish");
    }
});