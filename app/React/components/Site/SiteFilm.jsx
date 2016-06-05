
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteFilm = React.createClass({
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
    // Dimensions
    //---------------------------------------------------------------------------

    dimensions: function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        return {width: width, height: height};
    },

    //---------------------------------------------------------------------------
    // Film
    //---------------------------------------------------------------------------

    film: function(films, url) {
        for (var film in films) {
            if (films[film]['url'] === url) {
                return films[film];
            }
        }
    },

    //---------------------------------------------------------------------------
    // Iframe
    //---------------------------------------------------------------------------

    iframe: function(film) {
        var iframe = {
            lg: {},
            sm: {}
        };
        var ratio = film.embed.height / film.embed.width;
        var dimensions = this.dimensions();
        iframe.lg.width = dimensions.width * 0.6;
        iframe.lg.height = iframe.lg.width * ratio;
        iframe.sm.width = dimensions.width * 0.9;
        iframe.sm.height = iframe.sm.width * ratio;
        return iframe;
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(container, film) {
        var iframe = this.iframe(film);
        var style = {
            section: {
                position: 'relative',
                top: '10vh',
                left: '0',
                width: '100vw',
                height: '90vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                '@media (max-width: 48em)': {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: '-5vh 0 0 0'
                }
            },
            film: {
                margin: '0 5vw 0 0',
                '@media (max-width: 48em)': {
                    margin: '0'
                }
            },
            iframe: {
                width: iframe.lg.width,
                height: iframe.lg.height,
                '@media (max-width: 48em)': {
                    width: iframe.sm.width,
                    height: iframe.sm.height,
                }
            },
            description: {
                position: 'relative',
                display: 'inline-flex',
                height: '100%',
                width: '30vw',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                '@media (max-width: 48em)': {
                    width: '90vw',
                    height: '30%'
                }
            },
            title: {
                margin: '10vh 0 0 0',
                textTransform: 'uppercase',
                fontSize: '16px',
                '@media (max-width: 48em)': {
                    margin: '-3vh 0 0 0'
                }
            },
            subtitle: {
                margin: '1vh 0 0 0',
                textTransform: 'uppercase',
                fontSize: '11px',
                color: 'rgba(200, 200, 200, 1)'
            },
            span_inner: {
                margin: '0 0.5vw 0 0.5vw'
            },
            description_long: {
                margin: '4vh 0 0 0',
                width: '30vw',
                minHeight: '20vh',
                textAlign: 'justify',
                fontSize: '13px',
                letterSpacing: 'normal',
                '@media (max-width: 48em)': {
                    width: '90vw'
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
        var film = this.film(seed.public.films, site.private.url);
        var style = this.style(site.private.container, film);
        
        return (
            <section id="site-film" style={style.section}>
                <div style={style.description}>
                    <div style={style.title}>
                        {film.title}
                    </div>
                    <div style={style.subtitle}>
                        {film.tag}<span style={style.span_inner}>|</span>{film.location}
                    </div>
                </div>
                <div style={style.film}>
                    <iframe style={style.iframe} src={film.embed.src} frameBorder={film.embed.frameborder} allowFullScreen></iframe>
                </div>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteFilm);