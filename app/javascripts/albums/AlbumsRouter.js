'use strict';

var Metatags = require("brisket").Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var Album = require('./Album');
var AlbumView = require('./AlbumView');

var AlbumsRouter = RouterBrewery.create({

    routes: {
        'albums/:id': 'album'
    },

    album: function(type) {
        var album = new Album({ id: type });

        return album.fetch()
            .then(function() {
                return new AlbumView({ model: album })
                    .withTitle(album.get('title'));
            });
    }

});

module.exports = AlbumsRouter;
