//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var seedConstants = require('../constants/seedConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------

    //------------------
    // Change Event
    //------------------

    var CHANGE_EVENT = 'change';

    //------------------
    // Data
    //------------------

    var _store = {
        content: null
    };

    //------------------
    // Setter methods
    //------------------

  var changeContent = function(changes){
    var newStore = jQuery.extend(true, {}, _store.content);

    for(var change in changes)
    {
      newStore = _changeStoreCopy(newStore, changes[change]);
    }

    _store.content = newStore;
  };

  var updateContent = function(content) {
      _store.content = content;
  };

  var _changeStoreCopy = function(currentStoreCopy, change) {
    // Access parameters
    var currentStoreKey = change.key;
    var StoreValue = change.value;

    // Initialize variables
    var newStore = {};
    var currentKey = currentStoreKey.split('.').shift();
    var lastKey = currentStoreKey.split('.').pop();
    var splitKey = currentStoreKey.split('.');
    splitKey.shift();
    var nextKey = splitKey.join('.');
    var nextStoreCopy = currentStoreCopy[currentKey];

    // If we have hit the last level of nesting, we just need to set the value
    if(splitKey.unshift(nextKey) == 1)
    {
      // Determine if we want to delete a value or just change it
      if(StoreValue === "delete")
      {
        delete currentStoreCopy[currentStoreKey];
      }
      else if(currentStoreCopy[currentStoreKey] === "active" && StoreValue === "false")
      {
        currentStoreCopy[currentStoreKey] = currentStoreCopy[currentStoreKey];
      }
      else
      {
        // Add the value to the current version of our store copy
        currentStoreCopy[currentStoreKey] = StoreValue;
      }

      // Set the new store
      newStore = currentStoreCopy;
    }
    // If not, we need to set all the values for that current level and recurse
    // the current key back through this function
    else
    {
      // Since we need to rebuild the entire store outside of what we are
      // changing, we need to know the keys for the current level of nesting 
      var currentLevelKeys = Object.keys(currentStoreCopy);
      var currentLevelKeysLength = currentLevelKeys.length;

      // For each of those keys
      for (var i = 0; i < currentLevelKeysLength; i++)
      {
        // If it matches the key we are currently trying to change
        if(currentLevelKeys[i] == currentKey)
        {
          // Initialize parameters
          var parameters = {};

          // Set parameters
          parameters.key = nextKey;
          parameters.value = StoreValue;

          // Recurse
          newStore[currentKey] = _changeStoreCopy(nextStoreCopy, parameters);
        }
        // If not
        else
        {
          // Set that key to it's current value
          newStore[currentLevelKeys[i]] = currentStoreCopy[currentLevelKeys[i]];
        }
      }
    }
    // Return the new store
    return newStore;   
  };

    //------------------
    // Store
    //------------------

    var seedStore = objectAssign({}, EventEmitter.prototype, {

        addChangeListener: function(callback){
            this.on(CHANGE_EVENT, callback);
        },

        removeChangeListener: function(callback){
            this.removeListener(CHANGE_EVENT, callback);
        },

        getContent: function(){
            return _store.content;
        }

    });

    //------------------
    // Register w/ Dispatcher
    //------------------

    seedStore.dispatchToken = ContentDispatcher.register(function(payload){
        
        var action=payload.action;

        switch(action.actionType){

            case seedConstants.CHANGE_SEED:
                
                changeContent(action.data);
                seedStore.emit(CHANGE_EVENT);
            
            break;

            case seedConstants.UPDATE_SEED:
                
                updateContent(action.data);
                seedStore.emit(CHANGE_EVENT);
            
            break;
            
            default:
                return true;
        }
    });

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = seedStore;