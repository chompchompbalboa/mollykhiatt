var Dispatcher = require('flux').Dispatcher;
var ContentDispatcher = new Dispatcher();

ContentDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = ContentDispatcher;