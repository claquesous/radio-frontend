'use strict';

var BaseView = require('../base/BaseView');
var setRatings = require('../utils/ratings');
var setTimes = require('../utils/timeago');

var ArtistView = BaseView.extend({
    template: 'artists/artist',

    onDOM: function() {
        setRatings();
        setTimes();
    }
});

module.exports = ArtistView;
