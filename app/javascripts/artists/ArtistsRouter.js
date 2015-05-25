'use strict';

var Metatags = require("brisket").Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var Artist = require('./Artist');
var ArtistCollection = require('./ArtistCollection');
var ArtistView = require('./ArtistView');
var ArtistCollectionView = require('./ArtistCollectionView');

var ArtistsRouter = RouterBrewery.create({

    routes: {
        'artists': 'artists',
        'artists/:id': 'artist'
    },

    artists: function() {
        var artists = new ArtistCollection();
        return artists.fetch()
            .then(function() {
                return new ArtistCollectionView({ collection: artists });
            });
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
