
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteHeaderName = React.createClass({
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

    handleClick: function(e) {
        e.preventDefault();
        var changes = [
            {"key": "private.active", "value": "home"},
            {"key": "private.SiteHeader.color", "value": "white"},
            {"key": "private.SiteCoverOverlay.opacity", "value": "0.25"}
        ];
        siteActions.changeContent(changes);
    },

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(color, container) {
        var style = {
            div: {
                width: '33vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (max-width: 48em)': {
                    justifyContent: 'flex-end' 
                }
            },
            name: {
                color: color,
                textDecoration: 'none'
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {seed, site, ...other} = this.props;
        var style = this.style(site.private.SiteHeader.color, site.private.container);

        return (
            <div id="site-header-name" style={style.div}>
                <a href="" style={style.name} onClick={this.handleClick}>{seed.public.name}</a>
            </div>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteHeaderName);