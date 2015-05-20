'use strict';

var BaseModel = require('../base/BaseModel');

var Album = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/albums'
});

module.exports = Album;
