'use strict';

var BaseView = require('../base/BaseView');
var PlaysCollectionView = require('../plays/PlayCollectionView');

var HomeView = BaseView.extend({
    template: 'home/home',

    beforeRender: function() {
        this.createChildView(PlaysCollectionView)
            .withOptions({collection: this.collection})
            .andAppendIt();
    }

});

module.exports = HomeView;
