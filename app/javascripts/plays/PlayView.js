'use strict';

var BaseView = require('../base/BaseView');

var PlayView = BaseView.extend({
    template: 'plays/play',

    onDOM: function() {
        twttr.widgets.createTweet( this.model.get('tweet_id'), this.$('#tweet')[0], {theme: 'dark'});
        if (this.model.get('tweet_id')){
            this.$('#tweet').append('<a href="https://twitter.com/intent/tweet?screen_name=ClaqRadio&text=I%20love%20this%20song!&in-reply-to='+this.model.get('tweet_id')+'" class="twitter-mention-button" data-size="large" data-related="ClaqRadio" data-dnt="true">Rate Up</a>');
            this.$('#tweet').append('<a href="https://twitter.com/intent/tweet?screen_name=ClaqRadio&text=I%20hate%20this%20song!&in-reply-to='+this.model.get('tweet_id')+'" class="twitter-mention-button" data-size="large" data-related="ClaqRadio" data-dnt="true">Rate Down</a>');
        }
    }
});

module.exports = PlayView;
