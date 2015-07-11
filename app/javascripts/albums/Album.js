'use strict';

var BaseModel = require('../base/BaseModel');

var Album = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/api/albums'
});

module.exports = Album;
