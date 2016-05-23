
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');

var SiteHeaderMenu = require('./SiteHeaderMenu.jsx');
var SiteHeaderName = require('./SiteHeaderName.jsx');
var SiteHeaderShare = require('./SiteHeaderShare.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteHeader = React.createClass({
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

    componentDidMount: function() {
        window.addEventListener('scroll', this.handleScroll);
    },

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

    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    handleScroll: function() {
        var display = this.props.site.private.SiteHeader.display;
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log(display);
        console.log('top: ' + top);
        console.log('height: ' + height);
        if(display === "white" && (top/height) > .7) {
            this.toggleHeader();
        }
        else if(display === "black" && (top/height) <= .7) {
            this.toggleHeader();
        }
    },

    toggleHeader: function() {
        var display = (this.props.site.private.SiteHeader.display === "white" ? "black" : "white");
        console.log(display);
        var changes = [
            {"key": "private.SiteHeader.display", "value": display}
        ];
        siteActions.changeContent(changes);
    },

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(container) {
        var style = {
            nav: {
                zIndex: '99',
                position: 'fixed',
                backfaceVisibility: 'hidden',
                top: '0',
                left: '0',
                height: '10vh',
                width: Number(container.width.sm) * 100 + "vw",
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                transition: 'top .5s ease',
                '@media (min-width: 48em) and (max-width: 64em)': {
                    width: Number(container.width.md) * 100 + 'vw',    
                },
                '@media (min-width: 64em)': {
                    width: Number(container.width.lg) * 100 + 'vw',
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
            <nav id="site-header" style={style.nav}>
                <SiteHeaderMenu site={site} {...other} />
                <SiteHeaderName site={site} {...other} />
                <SiteHeaderShare site={site} {...other} />
            </nav>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteHeader);