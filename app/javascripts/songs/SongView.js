'use strict';

var BaseView = require('../base/BaseView');
var setRatings = require('../utils/ratings');
var setTimes = require('../utils/timeago');

var SongView = BaseView.extend({
    template: 'songs/song',

    onDOM: function() {
        setRatings();
        setTimes();
    }
});

module.exports = SongView;
