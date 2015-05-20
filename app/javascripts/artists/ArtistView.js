'use strict';

var BaseView = require('../base/BaseView');

var ArtistView = BaseView.extend({

    template: '<section class="artist"><h1></h1></section>',

    afterRender: function() {
        this.$('h1').html(this.model.get('name'));
    }
});

module.exports = ArtistView;
