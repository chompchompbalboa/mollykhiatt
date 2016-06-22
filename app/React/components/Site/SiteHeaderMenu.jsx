
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteHeaderMenu = React.createClass({
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
    // Graphic
    //---------------------------------------------------------------------------

    graphic: function(url, style) {
        if(url === "menu") {
            var graphic = [];
            graphic.push(<span key={'pos'} style={[style.icon_back, style.icon_back_pos]}></span>);
            graphic.push(<span key={'neg'} style={[style.icon_back, style.icon_back_neg]}></span>);
            return graphic;
        }
        else {
            var graphic = [];
            for(var i = 0; i < 3; i++) {
                graphic.push(  
                    <span key={i} style={style.icon_menu}></span>
                );
            }
            return graphic;
        }
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    handleClick: function(e) {
        e.preventDefault();
        var url = (this.props.site.private.url === "menu" ? this.props.site.private.previous : "menu");
        var previous = (this.props.site.private.url === "menu" ? this.props.site.private.previous : this.props.site.private.url);
        var changes = [
            {"key": "private.previous", "value": previous},
            {"key": "private.load", "value": "link"},
            {"key": "private.url", "value": url},
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
                width: '33vw'
            },
            a: {
                width: '100%',
                height: '100%',
                textDecoration: 'none'
            },
            container: {
                width: '20px',
                height: '20px',
                padding: '0 0 0 3vw',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            graphic: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: (this.props.site.private.url === "menu" ? 'center' : 'space-between'),
                alignItems: (this.props.site.private.url === "menu" ? 'center' : 'stretch'),
                '@media (min-width: 48em)': {
                    display: 'none'
                }
            },
            icon_menu: {
                margin: '0.25px 0 0.25px 0',
                width: '100%',
                height: '1.5px',
                backgroundColor: color,
                transition: 'background-color 0.5s ease'
            },
            icon_back: {
                position: 'absolute',
                width: '28.3px', 
                height: '28.3px',
                height: '1px',
                backgroundColor: color,
            },
            icon_back_pos: {
                transform: 'rotate(45deg)'
            },
            icon_back_neg: {
                transform: 'rotate(-45deg)'
            },
            text: {
                margin: '0 0 0 4px',
                textDecoration: 'none',
                color: color,
                textTransform: 'uppercase',
                '@media (max-width: 48em)': {
                    display: 'none'
                }
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {color, site, ...other} = this.props;
        var style = this.style(color, site.private.container);
        var text = (site.private.url === "menu" ? "Back" : "Menu");
        var graphic = this.graphic(site.private.url, style);

        return (
            <div id="site-header-menu" style={style.div}>
                <div style={style.container}>
                    <a href="/menu" style={style.a} onClick={this.handleClick}>
                        <div style={style.graphic}>
                            {graphic}
                        </div>
                        <div style={style.text}>
                            {text}
                        </div>
                    </a>
                </div>
            </div>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteHeaderMenu);