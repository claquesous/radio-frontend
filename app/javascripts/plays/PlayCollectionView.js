'use strict';

var BaseView = require('../base/BaseView');

var PlayCollectionView = BaseView.extend({

    template: '<section class="plays"></section>',

    afterRender: function() {
        this.collection.each( function(play){
            this.$('.plays').append('<a href="plays/'+play.id+'">' + play.get('song').title+ "</a><br>");
        }, this);
    }
});

module.exports = PlayCollectionView;
