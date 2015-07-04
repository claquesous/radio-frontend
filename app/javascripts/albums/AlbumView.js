'use strict';

var BaseView = require('../base/BaseView');
var setTimes = require('../utils/timeago');

var AlbumView = BaseView.extend({
    template: 'albums/album',

    onDOM: function(){
        setTimes();
    }

});

module.exports = AlbumView;
