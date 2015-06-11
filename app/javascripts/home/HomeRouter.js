'use strict';

var Metatags = require('brisket').Layout.Metatags;
var RouterBrewery = require('../routing/RouterBrewery');
var HomeView = require('./HomeView');
var PlayCollection = require('../plays/PlayCollection');

var HomeRouter = RouterBrewery.create({

    routes: {
        '': 'home'
    },

    home: function() {
        var description = 'The home of Claquesous Radio';
        var title = 'Welcome to Claquesous Radio!';

        var plays = new PlayCollection();
        return plays.fetch().then(function(){
            return new HomeView({collection: plays})
                .withTitle(title)
                .withMetatags(new Metatags({
                    'description': description,
                    'og:title': title,
                    'og:description': description,
                    'twitter:title': title,
                    'twitter:description': description
                }));
            });
    }

});

module.exports = HomeRouter;
