'use strict';

var BaseView = require('../base/BaseView');
var setRatings = require('../utils/ratings');

var ArtistView = BaseView.extend({
    template: 'artists/artist',

    onDOM: setRatings
});

module.exports = ArtistView;
