'use strict';

var BaseModel = require('../base/BaseModel');

var Artist = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/api/artists'
});

module.exports = Artist;
