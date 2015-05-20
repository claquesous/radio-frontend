'use strict';

var Metatags = require("brisket").Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var Song = require('./Song');
var SongView = require('./SongView');

var SongsRouter = RouterBrewery.create({

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
