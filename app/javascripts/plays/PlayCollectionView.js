'use strict';

var BaseView = require('../base/BaseView');

var PlayCollectionView = BaseView.extend({
    template: 'plays/plays',

    logic: function() {
        return {
            plays: this.collection.toJSON()
        }
    }
});

module.exports = PlayCollectionView;
