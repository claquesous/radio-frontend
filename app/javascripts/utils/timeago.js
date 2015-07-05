'use strict';

var $ = require('jquery');
var timeago = require('timeago');

module.exports = function() {
    var $time = $('time');
    $time.each(function(){
        var datetime = $(this).attr('datetime');
        $(this).html(datetime? timeago(datetime): 'Never');
    });
}
