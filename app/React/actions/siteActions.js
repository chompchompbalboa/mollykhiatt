//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var siteConstants = require('../constants/siteConstants');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var siteActions = {

    //-----------------------------------------------------------------------------
    // "Public" functions
    //-----------------------------------------------------------------------------

    changeContent: function(change){
        this._action("CHANGE_SITE", change);
    },

    fetchSite: function(){
        this._ajax("react/site", {}, "UPDATE_SITE");
    },

    //-----------------------------------------------------------------------------
    // "Private" functions
    //-----------------------------------------------------------------------------

    _action: function(action, data) {
        switch(action){
            case "CHANGE_SITE":
                ContentDispatcher.handleAction({
                    actionType: siteConstants.CHANGE_SITE,
                    data: data
                });
            break;

            case "UPDATE_SITE":
                ContentDispatcher.handleAction({
                    actionType: siteConstants.UPDATE_SITE,
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
            data: {
                data: data
            },
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
module.exports = siteActions;