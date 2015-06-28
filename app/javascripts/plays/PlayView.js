'use strict';

var BaseView = require('../base/BaseView');

var PlayView = BaseView.extend({
    template: 'plays/play',

    refresh: function(){
        this.collection.fetch({data: {limit: 1}});
        setTimeout(this.refresh.bind(this), 15000);
    },

    renderNewTweet: function(){
        this.model = this.collection.at(0);
        this.$('#tweet').empty();
        this.stopListening(this.collection);
        this.onDOM();
    },

    onDOM: function() {
        this.listenTo(this.collection, 'add', this.renderNewTweet);
        twttr.widgets.createTweet( this.model.get('tweet_id'), this.$('#tweet')[0], {theme: 'dark'});
        if (this.model.get('tweet_id')){
            this.$('#tweet').append('<a href="https://twitter.com/intent/tweet?screen_name=ClaqRadio&text=I%20love%20this%20song!&in-reply-to='+this.model.get('tweet_id')+'" class="twitter-mention-button" data-size="large" data-related="ClaqRadio" data-dnt="true">Rate Up</a>');
            this.$('#tweet').append('<a href="https://twitter.com/intent/tweet?screen_name=ClaqRadio&text=I%20hate%20this%20song!&in-reply-to='+this.model.get('tweet_id')+'" class="twitter-mention-button" data-size="large" data-related="ClaqRadio" data-dnt="true">Rate Down</a>');
        }
        setTimeout(this.refresh.bind(this), 15000);
    }
});

module.exports = PlayView;
