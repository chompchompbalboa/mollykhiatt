
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteMenuWeb = React.createClass({
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

    getInitialState: function() {
        return {
            hover: {
                "about": "false",
                "academic": "false",
                "art": "false",
                "film": "false",
                "photography": "false",
                "professional": "false"
            }
        }
    },

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
    // Background Image
    //---------------------------------------------------------------------------

    backgroundImage: function(component) {
        if(this.state.hover[component] === "true") {
            return "none";
        }
        else {
            return "url(/assets/Site/SiteMenuWeb/" + component + ".jpg)";
        }
    },

    //---------------------------------------------------------------------------
    // Border
    //---------------------------------------------------------------------------

    border: function(component) {
        if(this.state.hover[component] === "true") {
            return "1px solid black";
        }
        else {
            return "none";
        }
    },

    //---------------------------------------------------------------------------
    // Display Text
    //---------------------------------------------------------------------------

    displayText: function(component) {
        if(this.state.hover[component] === "false") {
            return "inline";
        }
        else {
            return "none";
        }
    },

    //---------------------------------------------------------------------------
    // Display Text
    //---------------------------------------------------------------------------

    displayList: function(component) {
        if(this.state.hover[component] === "true") {
            return "inline";
        }
        else {
            return "none";
        }
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    handleMouseEnter: function(component) {
        var hover = {
            "about": "false",
            "academic": "false",
            "art": "false",
            "film": "false",
            "photography": "false",
            "professional": "false"
        }
        hover[component] = "true";
        this.setState({hover: hover});
    },

    handleMouseLeave: function(component) {
        var hover = {
            "about": "false",
            "academic": "false",
            "art": "false",
            "film": "false",
            "photography": "false",
            "professional": "false"
        }
        this.setState({hover: hover});
    },

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(container) {
        var style = {
            section: {
                display: 'none',
                '@media (min-width: 64em)': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    backfaceVisibility: 'hidden',
                    top: '10vh',
                    left: '0',
                    width: '100vw',
                    minHeight: '90vh',
                    fontSize: '18px',
                    textTransform: 'uppercase'
                }
            },
            container: {
                width: '80vw',
                height: '33vh',
                display: 'flex',
                justifyContent: 'space-between'
            },
            one: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 0.5vw 0 0.5vw',
                width: '24%',
                height: '100%'
            },
            two: {
                padding: '0 0.5vw 0 0.5vw',
                width: '35%',
                height: '100%'
            },
            three: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 0.5vw 0 0.5vw',
                width: '22%',
                height: '100%'
            },
            four: {
                padding: '0 0.5vw 0 0.5vw',
                width: '19%',
                height: '100%'
            },
            image: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            },
            photography: {
                height: 'calc(50% - 0.5vw)',
                backgroundImage: this.backgroundImage('photography'),
                border: this.border('photography')
            },
            photography_text: {
                display: this.displayText('photography')
            },
            photography_list: {
                display: this.displayList('photography')
            },
            art: {
                height: 'calc(50% - 0.5vw)',
                backgroundImage: this.backgroundImage('art'),
                border: this.border('art')
            },
            art_text: {
                display: this.displayText('art')
            },
            art_list: {
                display: this.displayList('art')
            },
            academic: {
                height: '100%',
                whiteSpace: 'pre-line',
                backgroundImage: this.backgroundImage('academic'),
                border: this.border('academic')
            },
            academic_text: {
                display: this.displayText('academic')
            },
            academic_list: {
                display: this.displayList('academic')
            },
            professional: {
                height: 'calc(50% - 0.5vw)',
                whiteSpace: 'pre-line',
                backgroundImage: this.backgroundImage('professional'),
                border: this.border('professional')
            },
            professional_text: {
                display: this.displayText('professional')
            },
            professional_list: {
                display: this.displayList('professional')
            },
            film: {
                height: 'calc(50% - 0.5vw)',
                backgroundImage: this.backgroundImage('film'),
                border: this.border('film')
            },
            film_text: {
                display: this.displayText('film')
            },
            film_list: {
                display: this.displayList('film')
            },
            about: {
                height: '100%',
                backgroundImage: this.backgroundImage('about'),
                border: this.border('about')
            },
            about_text: {
                display: this.displayText('about')
            },
            about_list: {
                display: this.displayList('about')
            },
            text: {
                color: 'white',
                width: '100%',
                textAlign: 'center'
            },
            list: {
                color: 'black'
            },
            ul: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                letterSpacing: '1px',
                fontSize: '0px'
            },
            header: {
                margin: '0 0 1.5vh 0',
                fontSize: '12px'
            },
            li: {
                fontSize: '12px',
                display: 'inline',
                color: 'rgba(200, 200, 200, 1)'
            },
            a: {
                textDecoration: 'none',
                fontWeight: '300',
                color: 'rgba(200, 200, 200, 1)',
                ':hover': {
                    color: 'rgba(150, 150, 150, 1)'
                }
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
            <section id="site-menu-web" style={style.section}>
                <div style={style.container}>
                    <div style={style.one}>
                        <div style={[style.image, style.photography]} onMouseEnter={this.handleMouseEnter.bind(this, 'photography')} onMouseLeave={this.handleMouseLeave.bind(this, 'photography')}>
                            <div style={[style.text, style.photography_text]}>
                                Photography
                            </div>
                            <div style={[style.list, style.photography_list]}>
                                <ul style={[style.ul]}>
                                    <li style={style.header}>Photography</li>
                                    {photography}
                                </ul>
                            </div>
                        </div>
                        <div style={[style.image, style.art]} onMouseEnter={this.handleMouseEnter.bind(this, 'art')} onMouseLeave={this.handleMouseLeave.bind(this, 'art')}>
                            <div style={[style.text, style.art_text]}>
                                Art
                            </div>
                            <div style={[style.list, style.art_list]}>
                                <ul style={[style.ul]}>
                                    <li style={style.header}>Art</li>
                                    {art}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={style.two}>
                        <div style={[style.image, style.academic]} onMouseEnter={this.handleMouseEnter.bind(this, 'academic')} onMouseLeave={this.handleMouseLeave.bind(this, 'academic')}>
                            <div style={[style.text, style.academic_text]}>
                                Academic<br/>Architecture
                            </div>
                            <div style={[style.list, style.academic_list]}>
                                <ul style={[style.ul]}>
                                    <li style={style.header}>Academic</li>
                                    {academic}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={style.three}>
                        <div style={[style.image, style.professional]} onMouseEnter={this.handleMouseEnter.bind(this, 'professional')} onMouseLeave={this.handleMouseLeave.bind(this, 'professional')}>
                            <div style={[style.text, style.professional_text]}>
                                Professional<br/>Architecture
                            </div>
                            <div style={[style.list, style.professional_list]}>
                                <ul style={[style.ul]}>
                                    <li style={style.header}>Professional</li>
                                    {professional}
                                </ul>
                            </div>
                        </div>
                        <div style={[style.image, style.film]} onMouseEnter={this.handleMouseEnter.bind(this, 'film')} onMouseLeave={this.handleMouseLeave.bind(this, 'film')}>
                            <div style={[style.text, style.film_text]}>
                                Film
                            </div>
                            <div style={[style.list, style.film_list]}>
                                <ul style={[style.ul]}>
                                    <li style={style.header}>Film</li>
                                    {film}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={style.four}>
                        <div style={[style.image, style.about]} onMouseEnter={this.handleMouseEnter.bind(this, 'about')} onMouseLeave={this.handleMouseLeave.bind(this, 'about')}>
                            <div style={[style.text, style.about_text]}>
                                About
                            </div>
                            <div style={[style.list, style.about_list]}>
                                <ul style={[style.ul]}>
                                    <li style={style.header}>About</li>
                                    {about}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteMenuWeb);