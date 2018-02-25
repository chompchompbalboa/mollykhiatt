
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');
//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteContainerFeedItemsItem = React.createClass({
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
    // Active
    //---------------------------------------------------------------------------

    active: function(url) {
        var active;
        var splitUrl = url.split('/');
        switch(splitUrl[0]) {
            case "about":
                active = (splitUrl[1] === "bio" ? "bio" : "cv");
            break;
            case "contact":
                active = "contact"
            break;
            case "film":
                active = "film"
            break;
            default:
                active = "project"
            break;
        }
        return active;
    },

    //---------------------------------------------------------------------------
    // Column
    //---------------------------------------------------------------------------

    column: function(project) {
        return this.isEven(project.order.feed) ? "right" : "left";
    },

    isEven: function(number) {
        return Number(number) % 2 == 0;
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    handleLinkClick: function(e, url) {
        e.preventDefault();
        var active = this.active(url);
        var changes = [
            {"key": "private.load", "value": "link"},
            {"key": "private.url", "value": url},
            {"key": "private.SiteCoverOverlay.opacity", "value": "0.25"},
            {"key": "private.SiteProject.current", "value": "0"}
        ];
        siteActions.changeContent(changes);
    },

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(column, container) {
        var style = {
            section: {
                margin: (column === "left" ? '3vh 0 3vh 5%' : '3vh 5% 3vh 0'),
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (max-width: 48em)': {
                    margin: '3vh 0 3vh 0',
                    width: '80%'
                }
            },
            container: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textDecoration: 'none',
                alignItems: (column === "left" ? 'flex-end' : 'flex-start'),
                '@media (max-width: 48em)': {
                    alignItems: 'flex-start'
                },
                ':active': {
                    opacity: '0.7'
                },
                ':hover': {
                    opacity: '0.7'
                }
            },
            img: {
                width: '100%',
                height: 'auto'
            },
            title: {
                margin: '16px 0 0 0',
                fontFamily: 'Raleway',
                fontSize: '16px',
                fontWeight: '300',
                color: 'gray',
                letterSpacing: '2px'
            },
            description: {
                margin: '4px 0 0 0',
                textAlign: (column === "left" ? 'right' : 'left'),
                fontFamily: 'Raleway',
                textTransform: 'uppercase',
                '@media (max-width: 48em)': {
                    textAlign: 'left'
                }
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {project, site, ...other} = this.props;
        var column = this.column(project);
        var style = this.style(column, site.private.container);

        return (
            <section key="section" style={style.section}>
                <a href={project.url} style={style.container} onClick={(event) => this.handleLinkClick(event, project.url)}>
                    <img src={project.feed_photo} style={style.img}></img>
                    <div style={style.title}>{project.title}</div>
                    <div style={style.description}>{project.description_short}</div>
                </a>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteContainerFeedItemsItem);