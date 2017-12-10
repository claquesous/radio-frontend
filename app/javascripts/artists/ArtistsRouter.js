'use strict';

var Metatags = require("brisket").Layout.Metatags;
var Router = require('../routing/Router');
var Artist = require('./Artist');
var ArtistCollection = require('./ArtistCollection');
var ArtistView = require('./ArtistView');
var ArtistCollectionView = require('./ArtistCollectionView');

var ArtistsRouter = Router.extend({

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
