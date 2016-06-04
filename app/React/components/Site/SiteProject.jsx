
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var SiteProjectDescription = require('./SiteProjectDescription.jsx');
var SiteProjectTile = require('./SiteProjectTile.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var SiteProject = React.createClass({
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

    containerDimensions: function(tiles) {
        var dimensions = this.dimensions();
        var container =  {
            width: this.containerDimensionsWidth(dimensions, tiles),
            height: this.containerDimensionsHeight(dimensions)
        };
        return container;
    },

    containerDimensionsHeight: function(dimensions) {
        return dimensions.height * 0.75;
    },

    containerDimensionsWidth: function(dimensions, tiles) {
        var width = 0;
        var count = 0;
        for (var tile in tiles) {
            var ratio = Number(tiles[tile].img.width) / Number(tiles[tile].img.height);
            var height = dimensions.height * 0.75;
            width = width + (height * ratio);
            count = count + 1;
        };
        // The multiplier for the following two calculations comes from
        // description container width + margins + 0.01
        var containerWidthLg = dimensions.width * 0.42;
        var containerWidthSm = dimensions.width * 0.72;
        var marginWidth = count * 0.05 * dimensions.width;
        var widthLg = width + marginWidth + containerWidthLg;
        var widthSm = width + marginWidth + containerWidthSm;
        return {lg: widthLg, sm: widthSm};
    },

    //---------------------------------------------------------------------------
    // Dimensions
    //---------------------------------------------------------------------------

    dimensions: function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        return {width: width, height: height};
    },


    //---------------------------------------------------------------------------
    // Project
    //---------------------------------------------------------------------------

    project: function(projects, url) {
        for (var project in projects) {
            if (projects[project]['url'] === url) {
                return project;
            }
        }
    },

    //---------------------------------------------------------------------------
    // Tiles
    //---------------------------------------------------------------------------

    tiles: function(seed, site) {
        var tiles = [];
        for (var tile in seed) {
            tiles.push(
                <SiteProjectTile key={tile} site={site} tile={seed[tile]} />
            );
        };
        return tiles;
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function(container, dimensions) {
        var style = {
            section: {
                position: 'fixed',
                top: '15vh',
                width: '100vw',
                height: dimensions.height + 'px',
                overflowX: 'scroll',
                whiteSpace: 'nowrap',
                WebkitOverflowScrolling: 'touch'
            },
            container: {
                height: dimensions.height + 'px',
                width: dimensions.width.lg + 'px',
                display: 'block',
                '@media (max-width: 48em)': {
                    width: dimensions.width.sm + 'px'
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
        var project = this.project(seed.public.projects, site.private.url);
        var tiles = this.tiles(seed.public.projects[project].tiles, site);
        var style = this.style(site.private.container, this.containerDimensions(seed.public.projects[project].tiles));

        return (
            <section id="site-project" style={style.section}>
                <div style={style.container}>
                    <SiteProjectDescription project={project} seed={seed} site={site} {...other} />
                    {tiles}
                </div>
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteProject);