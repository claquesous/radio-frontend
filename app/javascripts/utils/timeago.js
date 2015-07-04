'use strict';

var $ = require('jquery');
var timeago = require('timeago');

module.exports = function() {
    var $time = $('time');
    var datetime = $time.attr('datetime');
    $time.html(datetime? timeago(datetime): 'Never');
}
