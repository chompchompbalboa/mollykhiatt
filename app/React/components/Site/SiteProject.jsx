
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var SiteProjectArrows = require('./SiteProjectArrows.jsx');
var SiteProjectTiles = require('./SiteProjectTiles.jsx');

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
        var windowDimensions = this.windowDimensions();
        var container =  {
            width: this.containerDimensionsWidth(windowDimensions, tiles),
            height: this.containerDimensionsHeight(windowDimensions)
        };
        return container;
    },

    containerDimensionsHeight: function(windowDimensions) {
        return windowDimensions.height * 0.75 + 20;
    },

    containerDimensionsWidth: function(windowDimensions, tiles) {
        var width = 0;
        var count = 0;
        var imageLeftsLg = {};
        var imageLeftsSm = {};
        var imageWidths = {};

        var descriptionWidthLg = windowDimensions.width * 0.3;
        var descriptionWidthSm = windowDimensions.width * 0.6;
        var descriptionMarginLeft = windowDimensions.width * 0.08;
        var descriptionMarginRight = windowDimensions.width * 0.03;
        var tilesMargin = windowDimensions.width * 0.05;
        var containerExtra = windowDimensions.width * 0.01;

        for (var tile in tiles) {
            var ratio = Number(tiles[tile].img.width) / Number(tiles[tile].img.height);
            var height = windowDimensions.height * 0.75;
            var imageWidth = height * ratio;
            width = width + imageWidth + tilesMargin;
            count = count + 1;
            imageWidths[count] = imageWidth;
            imageLeftsLg[count] = descriptionWidthLg + descriptionMarginLeft + descriptionMarginRight + width;
            imageLeftsSm[count] = descriptionWidthSm + descriptionMarginLeft + descriptionMarginRight + width;
        };

        var containerWidthLg = width + descriptionWidthLg + descriptionMarginLeft + descriptionMarginRight + containerExtra;
        var containerWidthSm = width + descriptionWidthSm + descriptionMarginLeft + descriptionMarginRight + containerExtra;
        return ({
            container: {
                width: {
                    lg: containerWidthLg,
                    sm: containerWidthSm
                }
            },
            description: {
                width: {
                    lg: descriptionWidthLg,
                    sm: descriptionWidthSm
                },
                margin: {
                    left: descriptionMarginLeft,
                    right: descriptionMarginRight
                }
            },
            imageLeftsLg: imageLeftsLg,
            imageLeftsSm: imageLeftsSm,
            imageWidths: imageWidths,
            tiles: {
                height: height,
                margin: {
                    lg: tilesMargin,
                    sm: tilesMargin
                }
            },
            windowDimensions: windowDimensions
        });
    },

    //---------------------------------------------------------------------------
    // Window Dimensions
    //---------------------------------------------------------------------------

    windowDimensions: function() {
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
    // Handles
    //---------------------------------------------------------------------------

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

        var {seed, site, ...other} = this.props;
        var project = this.project(seed.public.projects, site.private.url);
        var dimensions = this.containerDimensions(seed.public.projects[project].tiles);
        var style = this.style(site.private.container);

        return (
            <section id="site-project" style={style.section} >
                <SiteProjectArrows dimensions={dimensions} project={project} seed={seed} site={site} {...other} />
                <SiteProjectTiles dimensions={dimensions} project={project} seed={seed} site={site} {...other} />
            </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(SiteProject);