'use strict';

var Brisket = require('brisket');
var Routers = require('../routing/Routers');

var ServerApp = Brisket.ServerApp.extend({

    routers: Routers,

    start: function() {
        console.log('ServerApp has started with Brisket version ' + Brisket.version);
    }

});

module.exports = ServerApp;
