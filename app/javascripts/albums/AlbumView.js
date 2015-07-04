'use strict';

var BaseView = require('../base/BaseView');
var setRatings = require('../utils/ratings');
var setTimes = require('../utils/timeago');

var AlbumView = BaseView.extend({
    template: 'albums/album',

    onDOM: function(){
        setRatings();
        setTimes();
    }

});

module.exports = AlbumView;
