
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var adminActions = require('../../actions/adminActions');

var AdminDashboardActive = require('./AdminDashboardActive.jsx');
var AdminDashboardDivider = require('./AdminDashboardDivider.jsx');
var AdminDashboardMessage = require('./AdminDashboardMessage.jsx');
var AdminDashboardTitle = require('./AdminDashboardTitle.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var AdminDashboard = React.createClass({
    //---------------------------------------------------------------------------
    // Display Name
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Prop Types
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Mixins
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Statics
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Get Initial State
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Get Default Props
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Component Will Mount
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Component Did Mount
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Component Will Recieve Props
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Should Component Update
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Component Will Update
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Component Did Update
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Component Will Unmount
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(display, load) {
        var style = {
            section: {
                zIndex: '1',
                '@media (max-width: 48em)': {
                    position: 'fixed',
                    backfaceVisibility: 'hidden',
                    top: (load === "initial" ? '100vh' : (display === "true" ? '53vh' : '100vh')),
                    left: '0',
                    width: '100vw',
                    height: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: 'rgba(250,250,250,0.92)',
                    overflowY: 'scroll',
                    transition: 'top 0.5s'
                },
                '@media (min-width: 48em) and (max-width: 64em)': {
                    position: 'fixed',
                    backfaceVisibility: 'hidden',
                    top: '0',
                    left: (load === "initial" ? '100vw' : (display === "true" ? '60vw' : '100vw')),
                    width: '40vw',
                    height: '100vh',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(250,250,250,0.92)',
                    overflowY: 'scroll',
                    transition: 'left 0.5s'
                },
                '@media (min-width: 64em)': {
                    position: 'fixed',
                    backfaceVisibility: 'hidden',
                    top: '0',
                    left: (load === "initial" ? '100vw' : (display === "true" ? '75vw' : '100vw')),
                    width: '25vw',
                    height: '100vh',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(250,250,250,1)',
                    overflowY: 'scroll',
                    transition: 'left 0.5s'
                }
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {admin, ...other} = this.props;
        var style = this.style(admin.private.display, admin.private.load);

        return (
            <section id="admin-dashboard" style={style.section}>
                <AdminDashboardTitle admin={admin} {...other} />
                <AdminDashboardDivider admin={admin} {...other} />
                <AdminDashboardMessage admin={admin} {...other} />
                <AdminDashboardDivider admin={admin} {...other} />
                <AdminDashboardActive admin={admin} {...other} />
            </section>
        )      
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(AdminDashboard);