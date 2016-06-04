
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
            a: {
                textDecoration: 'none',
                color: 'rgba(200, 200, 200, 1)',
                ':hover': {
                    color: 'rgba(150, 150, 150, 1)'
                }
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

        var {list, seed, site, ...other} = this.props;
        var style = this.style(site.private.container);
        var academic = list('academic', seed, style);
        var professional = list('professional', seed, style);
        var art = list('art', seed, style);
        var photography = list('photography', seed, style);
        var film = list('film', seed, style);
        var about = list('about', seed, style);

        return (
            <section id="site-menu-mobile" style={style.section}>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.academic]}>
                    <li style={style.header}>Academic</li>
                    {academic}
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.professional]}>
                    <li style={style.header}>Professional</li>
                    {professional}
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.art]}>
                    <li style={style.header}>Art</li>
                    {art}
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.photography]}>
                    <li style={style.header}>Photography</li>
                    {photography}
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.film]}>
                    <li style={style.header}>Film</li>
                    {film}
                </ul>
                <span style={style.divider}></span>
                <ul style={[style.ul, style.about]}>
                    <li style={style.header}>About</li>
                    {about}
                </ul>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteMenuMobile);