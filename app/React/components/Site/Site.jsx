
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');

var SiteBio = require('./SiteBio.jsx');
var SiteContact = require('./SiteContact.jsx');
var SiteCV = require('./SiteCV.jsx');
var SiteFilm = require('./SiteFilm.jsx');
var SiteHeader = require('./SiteHeader.jsx');
var SiteHome = require('./SiteHome.jsx');
var SiteMenu = require('./SiteMenu.jsx');
var SiteProject = require('./SiteProject.jsx');

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

    componentDidMount: function() {
        this.replaceURL(this.props.site.private.url);
        window.addEventListener('popstate', this.handlePopState);
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

    componentDidUpdate: function() {
        if(this.props.site.private.load !== "pop") {
            this.setURL(this.props.site.private.url);
        }    
    },

    //---------------------------------------------------------------------------
    // Component Will Unmount
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Active
    //---------------------------------------------------------------------------

    active: function(seed, site) {
        var active = this.activeURL(site.private.url);
        switch(active) {
            case "bio":
                return (
                    <SiteBio
                        seed={seed}
                        site={site}
                    />
                )
            break;
            case "contact":
                return (
                    <SiteContact
                        seed={seed}
                        site={site}
                    />
                )
            break;
            case "cv":
                return (
                    <SiteCV
                        seed={seed}
                        site={site}
                    />
                )
            break;
            case "film":
                return (
                    <SiteFilm
                        seed={seed}
                        site={site}
                    />
                )
            break;
            case "menu":
                return (
                    <SiteMenu
                        seed={seed}
                        site={site}
                    />
                )
            break;
            case "project":
                return (
                    <SiteProject
                        seed={seed}
                        site={site}
                    />
                )
            break;
            default:
                return (
                    <SiteHome
                        seed={seed}
                        site={site}
                    />
                )
            break;
        }
    },

    //-------------------------------------------------------------------------
    // Active URL
    //-------------------------------------------------------------------------

    activeURL: function(url) {
        var active;
        if(url === "") {
            active = "home";
        }
        else {
            let splitURL = url.split("/");
            switch(splitURL[0]) {
                case "bio":
                    active = "bio";
                break;
                case "contact":
                    active = "contact";
                break;
                case "cv":
                    active = "cv";
                break;
                case "film":
                    active = "film";
                break;
                case "menu":
                    active = "menu";
                break;
                default:
                    active = "project";
                break;
            }
        }
        return active;
    },

    //-------------------------------------------------------------------------
    // Set URL
    //-------------------------------------------------------------------------

    setURL: function(url) {
        window.history.pushState({url: url}, "", location.origin + "/" + url);
    },

    //-------------------------------------------------------------------------
    // Replace URL
    //-------------------------------------------------------------------------

    replaceURL: function(url) {
        window.history.replaceState({url: url}, "", location.origin + "/" + url);
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    handlePopState: function(e) {
        var url;
        if (e.state !== null) {
            url = e.state.url
            var previous = (url === "menu" | this.props.site.private.url === "menu" ? this.props.site.private.previous : this.props.site.private.url);
            var changes = [
                {"key": "private.previous", "value": previous},
                {"key": "private.url", "value": url},
                {"key": "private.load", "value": "pop"}
            ];
            siteActions.changeContent(changes);
        }
        return;
    },

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

        var {seed, site, ...other} = this.props;
        var style = this.style(site.private.container);
        var active = this.active(seed, site);

        return (
            <section id="site" style={style.section}>
                <SiteHeader seed={seed} site={site} {...other} />
                {active}
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(Site);