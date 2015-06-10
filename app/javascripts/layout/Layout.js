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

});

module.exports = Layout;
