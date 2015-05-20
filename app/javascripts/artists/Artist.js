'use strict';

var BaseModel = require('../base/BaseModel');

var Artist = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/artists'
});

module.exports = Artist;
