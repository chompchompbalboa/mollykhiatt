//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var contentConstants = require('../constants/contentConstants');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var adminActions = {

    //-----------------------------------------------------------------------------
    // "Public" functions
    //-----------------------------------------------------------------------------

    changeContent: function(change){
        this._action("CHANGE_CONTENT", change);
    },

    fetchContent: function(){
        this._ajax("react/content", {}, "UPDATE_CONTENT");
    },

    //-----------------------------------------------------------------------------
    // "Private" functions
    //-----------------------------------------------------------------------------

    _action: function(action, data) {
        switch(action){
            case "CHANGE_CONTENT":
                ContentDispatcher.handleAction({
                    actionType: contentConstants.CHANGE_CONTENT,
                    data: data
                });
            break;

            case "UPDATE_CONTENT":
                ContentDispatcher.handleAction({
                    actionType: contentConstants.UPDATE_CONTENT,
                    data: data
                });
            break;
            
            default:
                return true;
        }
    },

    _ajax: function(url, data, action) {
        $.ajax({
            method: "POST",
            url: url,
            headers: {
                'X-CSRF-TOKEN': this._token()
            },
            data: data,
            dataType: 'json',
            cache: false,
            success: function(value) {
                this._action(action, value);
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(url, status, err.toString());
            }.bind(this)
        });
    },

    _token: function() {
        var token = $('meta[name="_token"]').attr('content');
        return token;
    }
};

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = adminActions;