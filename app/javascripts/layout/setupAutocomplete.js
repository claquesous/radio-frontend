'use strict';

var $ = require('jquery');
var brisket = require('brisket');

module.exports = function() {
    require('jquery-ui/autocomplete');

    $.widget( "ui.autocomplete", $.ui.autocomplete, {
        _resizeMenu: function() {
            this.menu.element.outerWidth( 350 );
        }
    });

    $('#search').autocomplete({
        source: function(request,response) {
            $.ajax({url:"/api/songs", type: 'GET', dataType: 'json', data: { query: request.term, limit: 10 }, success: function(data){ response(data.map(function(song){ return {label: song.artist.name + ' - ' + song.title, value: song.id}}));}});
        },
        minLength: 2,
        position: { my : "right top", at: "right bottom" },
        close: function(e){
            if (e.originalEvent && (e.originalEvent.type !== "input")){
                $(this).val('');
                $(this).blur();
            }
        },
        select: function(e,ui){
            brisket.navigateTo('songs/' + ui.item.value);
        },
        focus: function(e){
            e.preventDefault();
        },
        appendTo: '#search-box'
    });
};
