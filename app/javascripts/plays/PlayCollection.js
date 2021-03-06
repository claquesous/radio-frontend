'use strict';

var BaseCollection = require('../base/BaseCollection');
var Play = require('./Play');

var PlayCollection = BaseCollection.extend({
    model: Play,
    url: '/api/plays'
});

module.exports = PlayCollection;
