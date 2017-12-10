'use strict';

var Metatags = require("brisket").Layout.Metatags;
var Router = require('../routing/Router');
var Album = require('./Album');
var AlbumView = require('./AlbumView');

var AlbumsRouter = Router.extend({

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
