
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var SiteContainer = require('./SiteContainer.jsx');
var SiteCover = require('./SiteCover.jsx');
var SiteHeader = require('./SiteHeader.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var Site = React.createClass({
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

    style: function(container) {
        var style = {
            section: {
                zIndex: '0',
                position: 'relative',
                width: Number(container.width.sm) * 100 + 'vw',
                fontFamily: 'brandon-grotesque',
                '@media (min-width: 48em) and (max-width: 64em)': {
                    width: Number(container.width.md) * 100 + 'vw'
                },
                '@media (min-width: 64em)': {
                    width: Number(container.width.lg) * 100 + 'vw'
                }
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {site, ...other} = this.props;
        var style = this.style(site.private.container);

        return (
            <section id="site" style={style.section}>
                <SiteHeader site={site} {...other} />
                <SiteCover site={site} {...other} />
                <SiteContainer site={site} {...other} />
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(Site);