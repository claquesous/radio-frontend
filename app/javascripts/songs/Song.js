'use strict';

var BaseModel = require('../base/BaseModel');

var Song = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/api/songs'
});

module.exports = Song;
