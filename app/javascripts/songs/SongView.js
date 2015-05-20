'use strict';

var BaseView = require('../base/BaseView');

var SongView = BaseView.extend({

    template: '<section class="song"><h1></h1></section>',

    afterRender: function() {
        this.$('h1').html(this.model.get('title'));
    }
});

module.exports = SongView;
