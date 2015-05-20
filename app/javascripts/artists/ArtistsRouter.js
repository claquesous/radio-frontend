'use strict';

var Metatags = require("brisket").Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var Artist = require('./Artist');
var ArtistView = require('./ArtistView');

var ArtistsRouter = RouterBrewery.create({

    routes: {
        'artists/:id': 'artist'
    },

    artist: function(type) {
        var artist = new Artist({ id: type });

        return artist.fetch()
            .then(function() {
                return new ArtistView({ model: artist })
                    .withTitle(artist.get('name'));
            });
    }

});

module.exports = ArtistsRouter;
