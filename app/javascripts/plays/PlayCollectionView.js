'use strict';

var BaseView = require('../base/BaseView');
var setRatings = require('../utils/ratings');

var PlayCollectionView = BaseView.extend({
    template: 'plays/plays',

    logic: function() {
        return {
            plays: this.collection.toJSON()
        }
    },

    onDOM: setRatings
});

module.exports = PlayCollectionView;
