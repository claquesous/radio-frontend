'use strict';

var Brisket = require("brisket");

var DefaultErrorView = Brisket.View.extend({
    template: '<h1 style="color: #C00;">500 - There was an error serving the page</h1>'
});

module.exports = DefaultErrorView;
