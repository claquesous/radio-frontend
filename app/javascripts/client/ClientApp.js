'use strict';

var Brisket = require('brisket');
var Routers = require('../routing/Routers');

var ClientApp = Brisket.ClientApp.extend({

    routers: Routers,

    start: function() {
        // do client-only app set up here
        console.log('ClientApp has started with Brisket version ' + Brisket.version);
    }

});

module.exports = ClientApp;
