
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');

var SiteMenuMobile = require('./SiteMenuMobile.jsx');
var SiteMenuWeb = require('./SiteMenuWeb.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteMenu = React.createClass({
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
    // About List
    //---------------------------------------------------------------------------

    aboutList: function(style) {
        var list = [];
        list.push(this.li(0, style, "Bio", "bio"));
        list.push(this.li(1, style, "CV", "cv"));
        list.push(this.li(2, style, "Contact", "contact"));
        return list;
    },

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
    // Current Projects
    //---------------------------------------------------------------------------

    currentProjects: function(category, projects) {
        var current = [];
        for (var project in projects) {
            if(projects[project].category === category) {
                current.push(projects[project]);
            }
        }
        return current;
    },

    //---------------------------------------------------------------------------
    // Film List
    //---------------------------------------------------------------------------

    filmList: function(seed, style) {
        var film = [];
        var films = seed.public.films;
        for (var current in films) {
            var title = films[current].title;
            var url = films[current].url;
            film.push(
                this.li(current, style, title, url)
            );
        }
        return film;
    },

    //---------------------------------------------------------------------------
    // li
    //---------------------------------------------------------------------------

    li: function(key, style, title, url) {
        return (
            <li key={key} style={style.li}>
                <a key={url} href={url} style={style.a} onClick={(event) => this.handleLinkClick(event, url)}>
                    {title}
                </a>
            </li>
        )
        
    },

    //---------------------------------------------------------------------------
    // List
    //---------------------------------------------------------------------------

    list: function(category, seed, style) {
        var list;
        switch(category) {
            case "about":
                list = this.aboutList(style);
            break;
            case "contact":
                list = this.contactList(style);
            break;
            case "film":
                list = this.filmList(seed, style);
            break;
            default:
                list = this.projectList(category, seed, style);
            break;
        }
        return list;
    },

    //---------------------------------------------------------------------------
    // Project List
    //---------------------------------------------------------------------------

    projectList: function(category, seed, style) {
        var list = [];
        var projects = this.currentProjects(category, seed.public.projects);
        for (var i = 0; i < projects.length; i++) {
            var title = projects[i].title;
            var url = projects[i].url;
            list.push(this.li(i, style, title, url));
        }
        return list;
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    handleLinkClick: function(e, url) {
        e.preventDefault();
        var active = this.active(url);
        var changes = [
            {"key": "private.load", "value": "link"},
            {"key": "private.url", "value": url}
        ];
        siteActions.changeContent(changes);
    },

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(container) {
        var style = {
            section: {
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
        var list = this.list;

        return (
            <section id="site-menu" style={style.section}>
                <SiteMenuMobile list={list} site={site} {...other} />
                <SiteMenuWeb list={list} site={site} {...other} />
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteMenu);