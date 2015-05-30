'use strict';

var Metatags = require("brisket").Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var Play = require('./Play');
var PlayCollection = require('./PlayCollection');
var PlayView = require('./PlayView');
var PlayCollectionView = require('./PlayCollectionView');

var PlaysRouter = RouterBrewery.create({

    routes: {
        'plays': 'plays',
        'plays/:id': 'play'
    },

    plays: function() {
        var plays = new PlayCollection();
        return plays.fetch({data: {limit: 1}})
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
