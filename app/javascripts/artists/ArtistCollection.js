'use strict';

var BaseCollection = require('../base/BaseCollection');
var Artist = require('./Artist');

var ArtistCollection = BaseCollection.extend({
    model: Artist,
    url: '/artists.json'
});

module.exports = ArtistCollection;
