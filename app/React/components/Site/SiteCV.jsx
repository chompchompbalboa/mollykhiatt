
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteCV = React.createClass({
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
    // Container Dimensions
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
                position: 'absolute',
                top: '10vh',
                left: '0',
                width: '100vw',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (max-width: 48em)': {
                    height: '100vh'
                }
            },
            header: {
                margin: '2vh 0 1.5vh 0',
                textTransform: 'uppercase',
                fontSize: '15px'
            },
            ul: {
                listStyle: 'none',
                textAlign: 'center'
            },
            li: {
                margin: '0.5vh 0 0.5vh 0',
                color: 'rgba(200, 200, 200, 1)',
                fontSize: '15px',
                whiteSpace: 'nowrap'
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {seed, site, ...other} = this.props;
        var style = this.style(site.private.container);

        return (
            <section id="site-cv" style={style.section}>
                <ul style={style.ul}>
                    <li style={style.header}>Education</li>
                    <li style={style.li}>MArchD | Oxford School of Arch. | UK</li>
                    <li style={style.li}>BArch | University of Washington | US</li>
                </ul>
                <ul style={style.ul}>
                    <li style={style.header}>Experience</li>
                    <li style={style.li}>WilkinsonEyre | UK | 2016</li>
                    <li style={style.li}>Krause Architects | UK | 2015</li>
                    <li style={style.li}>Elkus Manfredi Architects | US | 2014</li>
                    <li style={style.li}>WilkinsonEyre | UK | 2013</li>
                    <li style={style.li}>Shigeru Ban Architects | JP | 2012</li>
                    <li style={style.li}>Johnson Architecture | US | 2011</li>
                </ul>
                <ul style={style.ul}>
                    <li style={style.header}>Software</li>
                    <li style={style.li}>Revit</li>
                    <li style={style.li}>Rhino</li>
                    <li style={style.li}>MicroStation</li>
                    <li style={style.li}>Adobe Suite</li>
                    <li style={style.li}>AutoCAD</li>
                    <li style={style.li}>SketchUp</li>
                    <li style={style.li}>V-Ray</li>
                    <li style={style.li}>Grasshopper</li>
                </ul>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteCV);