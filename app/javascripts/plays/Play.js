'use strict';

var BaseModel = require('../base/BaseModel');

var Play = BaseModel.extend({

    idAttribute: 'id',

    urlRoot: '/api/plays'
});

module.exports = Play;
