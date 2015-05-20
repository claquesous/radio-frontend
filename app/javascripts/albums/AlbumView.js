'use strict';

var BaseView = require('../base/BaseView');

var AlbumView = BaseView.extend({

    template: '<section class="album"><h1></h1></section>',

    afterRender: function() {
        this.$('h1').html(this.model.get('title'));
    }
});

module.exports = AlbumView;
