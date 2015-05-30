'use strict';

var Brisket = require("brisket");

var PageNotFoundView = Brisket.View.extend({
    template: '<h1 style="color: #C00;">404 - Page Not Found</h1>'
});

module.exports = PageNotFoundView;
