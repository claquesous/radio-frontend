'use strict';

var BaseView = require('../base/BaseView');

var PlayView = BaseView.extend({

    template: '<section class="play"><h1></h1></section>',

    afterRender: function() {
        var artist = this.model.get('artist');
        var song = this.model.get('song');
        var artistLink = '<a href="artists/' + artist.id + '">' + artist.name + '</a>';
        var songLink = '<a href="songs/' + song.id + '">' + song.title + '</a>';
        this.$('h1').html(artistLink + " - " + songLink);
    }
});

module.exports = PlayView;
