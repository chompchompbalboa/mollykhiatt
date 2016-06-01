
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');


//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteMenuMobile = React.createClass({
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
                display: 'none',
                '@media (max-width: 64em)': {
                    position: 'relative',
                    top: '10vh',
                    left: '0',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textTransform: 'uppercase'
                }
            },
            ul: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                letterSpacing: '3px'
            },
            header: {
                margin: '2vh 0 1.5vh 0',
                fontSize: '12px'
            },
            li: {
                margin: '1.5vh 0 1.5vh 0',
                fontSize: '12px',
                color: 'rgba(200, 200, 200, 1)'
            },
            divider: {
                width: '100vw',
                height: '1px',
                backgroundColor: 'rgba(200, 200, 200, 1)'
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
            <section id="site-menu-mobile" style={style.section}>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.academic]}>
                    <li style={style.header}>Academic</li>
                    <li style={style.li}>Cantagalo Learning Lab</li>
                    <li style={style.li}>Cabin in the Woods</li>
                    <li style={style.li}>Elementary</li>
                    <li style={style.li}>Marine Center</li>
                    <li style={style.li}>Student Housing</li>
                    <li style={style.li}>Culinary School</li>
                    <li style={style.li}>Shelter</li>
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.professional]}>
                    <li style={style.header}>Professional</li>
                    <li style={style.li}>The Gambia Orphanage</li>
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.art]}>
                    <li style={style.header}>Art</li>
                    <li style={style.li}>Built</li>
                    <li style={style.li}>Organic</li>
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.photography]}>
                    <li style={style.header}>Photography</li>
                    <li style={style.li}>Rio</li>
                    <li style={style.li}>Portrait</li>
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.film]}>
                    <li style={style.header}>Film</li>
                    <li style={style.li}>Cabin Essence</li>
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.about]}>
                    <li style={style.header}>About</li>
                    <li style={style.li}>Bio</li>
                    <li style={style.li}>CV</li>
                </ul>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteMenuMobile);