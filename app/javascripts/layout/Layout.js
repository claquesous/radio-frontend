'use strict';

var Brisket = require('brisket');
var templates = require("../templating/templates").templates;
var HoganAdapter = require("hogan-brisket")(templates);
var PlayCollection = require('../plays/PlayCollection');
var PlayView = require('../plays/PlayView');
var setupAutocomplete = require('./setupAutocomplete');

var Layout = Brisket.Layout.extend({
    templateAdapter: HoganAdapter,

    defaultTitle: 'Claquesous Radio',

    content: '#content',

    template: 'layout/layout',

    fetchData: function(){
        this.plays = new PlayCollection();
        return this.plays.fetch({data: {limit: 1}});
    },

    beforeRender: function(){
        this.createChildView(PlayView)
            .withOptions({collection: this.plays, model: this.plays.at(0)})
            .andInsertInto('.now-playing');
    },

    onDOM: setupAutocomplete
});

module.exports = Layout;
