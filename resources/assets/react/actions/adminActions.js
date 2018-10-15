//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var adminConstants = require('../constants/adminConstants');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

var adminActions = {

    //-----------------------------------------------------------------------------
    // "Public" functions
    //-----------------------------------------------------------------------------

    changeContent: function(change){
        this._action("CHANGE_ADMIN", change);
    },

    fetchAdmin: function(){
        this._ajax("react/admin", {}, "UPDATE_ADMIN");
    },

    login: function(email, password){
        this._ajax("react/login", {'email': email, 'password': password}, "CHANGE_ADMIN");
    },

    logout: function(){
        this._ajax("react/logout", {}, "CHANGE_ADMIN");
    },

    //-----------------------------------------------------------------------------
    // "Private" functions
    //-----------------------------------------------------------------------------

    _action: function(action, data) {
        switch(action){
            case "CHANGE_ADMIN":
                ContentDispatcher.handleAction({
                    actionType: adminConstants.CHANGE_ADMIN,
                    data: data
                });
            break;

            case "UPDATE_ADMIN":
                ContentDispatcher.handleAction({
                    actionType: adminConstants.UPDATE_ADMIN,
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
module.exports = adminActions;