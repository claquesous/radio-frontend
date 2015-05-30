'use strict';

var Brisket = require('brisket');
var BaseView = require('../base/BaseView');
var templates = require("../templating/templates").templates;
var HoganAdapter = require("hogan-brisket")(templates);

var Layout = Brisket.Layout.extend({
    templateAdapter: HoganAdapter,

    defaultTitle: 'Claquesous Radio',

    content: '#content',

    template: 'layout/layout',

    beforeRender: function() {
        this.createChildView(HeaderView)
            .andPrependItTo('body');
    }

});

var HeaderView = Brisket.View.extend({

    template: '<header><h1><a href="" class="logo">Claquesous Radio</a></h1></header>',

    onDOM: function() {
        var $logo = this.$('.logo');
        $logo.fadeOut(function() {
            $logo.fadeIn();
        });
    }

});

module.exports = Layout;
