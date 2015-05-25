'use strict';

var BaseView = require('../base/BaseView');

var ArtistCollectionView = BaseView.extend({

    template: '<section class="artists"></section>',

    afterRender: function() {
        this.collection.each( function(artist){
            this.$('.artists').append('<a href="artists/'+artist.id+'">' + artist.get('name')+ "</a><br>");
        }, this);
    }
});

module.exports = ArtistCollectionView;
