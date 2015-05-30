'use strict';

var Brisket = require('brisket');
var templates = require("../templating/templates").templates;
var HoganAdapter = require("hogan-brisket")(templates);

var BaseView = Brisket.View.extend({
    templateAdapter: HoganAdapter
});

module.exports = BaseView;
