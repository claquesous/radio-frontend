'use strict';

var Metatags = require("brisket").Layout.Metatags;
var Router = require('../routing/Router');
var Play = require('./Play');
var PlayCollection = require('./PlayCollection');
var PlayView = require('./PlayView');
var PlayCollectionView = require('./PlayCollectionView');

var PlaysRouter = Router.extend({

    routes: {
        'plays': 'plays',
        'plays/:id': 'play'
    },

    plays: function() {
        var plays = new PlayCollection();
        return plays.fetch()
            .then(function() {
                return new PlayCollectionView({ collection: plays });
            });
    },

    play: function(type) {
        var play = new Play({ id: type });

        return play.fetch()
            .then(function() {
                return new PlayView({ model: play })
                    .withTitle(play.get('name'));
            });
    }

});

module.exports = PlaysRouter;
