'use strict';

var Brisket = require('brisket');

var BaseModel = Brisket.Model.extend({
    // add properties here that you want to expose to all of your Models
    url: function(){
        return this.urlRoot + '/' + this.id + '.json';
    }
});

module.exports = BaseModel;
