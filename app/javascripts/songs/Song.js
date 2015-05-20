'use strict';

var BaseModel = require('../base/BaseModel');

var Song = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/songs'
});

module.exports = Song;
