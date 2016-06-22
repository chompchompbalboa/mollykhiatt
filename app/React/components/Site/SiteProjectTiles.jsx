
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var siteActions = require('../../actions/siteActions');

var SiteProjectDescription = require('./SiteProjectDescription.jsx');
var SiteProjectTile = require('./SiteProjectTile.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteProjectTiles = React.createClass({
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
        var current = this.props.site.private.SiteProject.current;
        if(current !== "0") {
            this.section.scrollLeft = this.getScrollLeft();
        }
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
        this.scrollTo(this.getScrollLeft(), 500)
    },

    //---------------------------------------------------------------------------
    // Component Will Unmount
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Ease In Out
    //---------------------------------------------------------------------------

    easeInOut: function(currentTime, start, change, duration) {
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    },

    //---------------------------------------------------------------------------
    // Animate Scroll
    //---------------------------------------------------------------------------

    animateScroll: function(elapsedTime, start, change, duration, increment) {        
        elapsedTime += increment;
        var position = this.easeInOut(elapsedTime, start, change, duration);                        
        this.section.scrollLeft = position; 
        if (elapsedTime < duration) {
            setTimeout(() => {this.animateScroll(elapsedTime, start, change, duration, increment)}, increment);
        }
    },

    //---------------------------------------------------------------------------
    // Get Scroll Left
    //---------------------------------------------------------------------------

    getScrollLeft: function() {
        var current = this.props.site.private.SiteProject.current;
        var scrollLeft = 0;
        if(current !== "0") {
            var dimensions = this.props.dimensions;
            var maxScrollLeft = this.section.scrollWidth - this.section.clientWidth;
            var containerWidth = Math.floor(dimensions.width.windowDimensions.width * 0.9);
            var imageWidth = Math.floor(dimensions.width.imageWidths[current]);
            var imageAdjustment = Math.floor((containerWidth + imageWidth) / 2);
            var imageLeft = Math.floor(dimensions.width.imageLeftsLg[current]);
            scrollLeft = imageLeft - imageAdjustment;
        }
        return scrollLeft;
    },

    //---------------------------------------------------------------------------
    // Tiles
    //---------------------------------------------------------------------------

    tiles: function(dimensions, seed, site) {
        var tiles = [];
        for (var tile in seed) {
            tiles.push(
                <SiteProjectTile key={tile} dimensions={dimensions} site={site} tile={seed[tile]} />
            );
        };
        return tiles;
    },

    //---------------------------------------------------------------------------
    // Scroll To
    //---------------------------------------------------------------------------

    scrollTo: function(to, duration) {
        var start = this.section.scrollLeft,
            change = to - start,
            increment = 20;

        this.animateScroll(0, start, change, duration, increment);
    },

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(container, dimensions) {
        var style = {
            wrapper: {
                position: 'fixed',
                top: 'calc(15vh + 10px)',
                left: '0',
                width: '100vw',
                height: dimensions.height - 20 + 'px',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch',
                '@media (min-width: 64em)': {
                    left: '5vw',
                    width: '90vw'
                }
            },
            section: {
                position: 'relative',
                top: '0',
                left: '0',
                width: '100%',
                height: dimensions.height + 'px',
                overflowX: 'scroll',
                overflowY: 'hidden',
                whiteSpace: 'nowrap',
                WebkitOverflowScrolling: 'touch'
            },
            container: {
                position: 'relative',
                top: '0',
                left: '0',
                height: dimensions.height + 'px',
                width: dimensions.width.container.width.lg + 'px',
                display: 'block',
                '@media (max-width: 48em)': {
                    width: dimensions.width.container.width.sm + 'px'
                }
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {

        var {dimensions, project, seed, site, ...other} = this.props;
        var tiles = this.tiles(dimensions, seed.public.projects[project].tiles, site);
        var style = this.style(site.private.container, dimensions);

        return (
            <div id="site-project-tiles-wrapper" style={style.wrapper}>
                <section id="site-project-tiles" ref={(ref) => this.section = ref} style={style.section} >
                    <div style={style.container}>
                        <SiteProjectDescription dimensions={dimensions} project={project} seed={seed} site={site} {...other} />
                        {tiles}
                    </div>
                </section>
            </div>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteProjectTiles);