//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var seedConstants = require('../constants/seedConstants');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var seedActions = {

    //-----------------------------------------------------------------------------
    // "Public" functions
    //-----------------------------------------------------------------------------

    changeContent: function(change){
        this._action("CHANGE_SEED", change);
    },

    fetchSeed: function(){
        this._ajax("react/seed", {}, "UPDATE_SEED");
    },

    newSeed: function(){
        this._ajax("react/new", {}, "UPDATE_SEED");
    },

    saveSeed: function(){
        this._ajax("react/save", {}, "UPDATE_SEED");
    },

    //-----------------------------------------------------------------------------
    // "Private" functions
    //-----------------------------------------------------------------------------

    _action: function(action, data) {
        switch(action){
            case "CHANGE_SEED":
                ContentDispatcher.handleAction({
                    actionType: seedConstants.CHANGE_SEED,
                    data: data
                });
            break;

            case "UPDATE_SEED":
                ContentDispatcher.handleAction({
                    actionType: seedConstants.UPDATE_SEED,
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
module.exports = seedActions;