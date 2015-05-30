'use strict';

var BaseView = require('../base/BaseView');

var ArtistCollectionView = BaseView.extend({
    template: 'artists/artist',

    logic: function() {
        return {
            artists: this.collection.toJSON()
        }
    }
});

module.exports = ArtistCollectionView;
