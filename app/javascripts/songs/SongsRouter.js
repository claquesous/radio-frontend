'use strict';

var Metatags = require("brisket").Layout.Metatags;
var Router = require('../routing/Router');
var Song = require('./Song');
var SongView = require('./SongView');

var SongsRouter = Router.extend({

    routes: {
        'songs/:id': 'song'
    },

    song: function(type) {
        var song = new Song({ id: type });

        return song.fetch()
            .then(function() {
                return new SongView({ model: song })
                    .withTitle(song.get('title'));
            });
    }

});

module.exports = SongsRouter;
