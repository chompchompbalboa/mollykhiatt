
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
import {StyleRoot} from 'radium';

var React = require('react');
var Radium = require('radium');

var adminStore = require('../../stores/adminStore');
var adminActions = require('../../actions/adminActions');
var seedStore = require('../../stores/seedStore');
var seedActions = require('../../actions/seedActions');
var siteStore = require('../../stores/siteStore');
var siteActions = require('../../actions/siteActions');

var Admin = require('./Admin.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var AdminBundle = React.createClass({
    //-------------------------------------------------------------------------
    // Display Name
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Prop Types
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Mixins
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Statics
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Get Initial State
    //-------------------------------------------------------------------------

    getInitialState: function() {
        return {
            admin: null,
            seed: null,
            site: null
        };
    },

    //-------------------------------------------------------------------------
    // Get Default Props
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Will Mount
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Did Mount
    //-------------------------------------------------------------------------

    componentDidMount: function() {
        adminStore.addChangeListener(this._onChange);
        seedStore.addChangeListener(this._onChange);
        siteStore.addChangeListener(this._onChange);
        adminActions.fetchAdmin();
        seedActions.fetchSeed();
        siteActions.fetchSite();
    },

    //-------------------------------------------------------------------------
    // Component Will Recieve Props
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Should Component Update
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Will Update
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Did Update
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component Will Unmount
    //-------------------------------------------------------------------------

    componentWillUnmount: function() {
        adminStore.removeChangeListener(this._onChange);
        seedStore.removeChangeListener(this._onChange);
        siteStore.removeChangeListener(this._onChange);
    },

    //-------------------------------------------------------------------------
    // On Change
    //-------------------------------------------------------------------------

    _onChange: function() {
      this.setState({
          admin: adminStore.getContent(),
          seed: seedStore.getContent(),
          site: siteStore.getContent()
      });
    },

    //-------------------------------------------------------------------------
    // Handle Change Content
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Objects
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Handles
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Style
    //-------------------------------------------------------------------------

    style: function() {
        var style = {
            section: {
                zIndex: '1'
            }
        };

        return style;
    },

    //-------------------------------------------------------------------------
    // Render
    //-------------------------------------------------------------------------

    render: function() {

        if(this.state.admin !== null && this.state.seed !== null && this.state.site !== null) {

            var style = this.style();

            return (
                <StyleRoot>
                    <Admin admin={this.state.admin} seed={this.state.seed} site={this.state.site}/>
                </StyleRoot>
            ) 
        }
        else {
            return (
                <StyleRoot>
                    <section id="admin">
                    </section>
                </StyleRoot>
            ) 
        } 
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(AdminBundle);