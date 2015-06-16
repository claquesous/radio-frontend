var $ = require('jquery');

module.exports = function(){
    var ratings = $('.rating');
    ratings.map(function(index,rating){
        var oldWidth = $(rating).find('.rating-inner1').width(),
            newWidth = oldWidth * $(rating).data('rating') / 100;
        $(rating).width(newWidth);
        return rating;
    });
}
