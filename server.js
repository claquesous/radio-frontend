'use strict';

var express = require('express');
var Brisket = require('brisket');
var RadioConfig = require('./config');

var PORT = process.env.PORT || 8080;

var app = express()

    .use(express.static(__dirname + '/public'))

    .use(Brisket.createServer({
        apiHost: RadioConfig.backend,

        clientAppRequirePath: 'app/ClientApp',

        ServerApp: require('./app/javascripts/server/ServerApp'),

        onRouteHandled: function(options) {
            console.log("Original request was for: " + options.request.path);
            console.log("Responded to matched route: " + options.route);
        }

    }))

    .use(function(request, response) {
        response.status(500).sendfile(__dirname + '/public/unrecoverable-error.html');
    })
;

app.listen(PORT);
console.log("Brisket app is listening on port: %s", PORT);
