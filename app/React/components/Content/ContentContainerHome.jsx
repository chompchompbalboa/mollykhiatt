
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

//var ChildPlaceholder = require('./ChildPlaceholder.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var ContentContainerHome = React.createClass({
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
    // Objects
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function() {
        var style = {
            section: {
                position: 'absolute',
                top: '7vh',
                left: '0',
                width: '100vw'
            },
            one: {
                position: 'absolute',
                top: '2vh',
                left: '3vw',
                width: '20vw',
                height: '40vh'
            },
            two: {
                position: 'absolute',
                top: '2vh',
                left: '26vw',
                width: '20vw',
                height: '40vh'
            },
            three: {
                position: 'absolute',
                top: '2vh',
                left: '49vw',
                width: '20vw',
                height: '40vh'
            },
            four: {
                position: 'absolute',
                top: '2vh',
                left: '72vw',
                width: '24vw',
                height: '40vh'
            },
            five: {
                position: 'absolute',
                top: '44vh',
                left: '3vw',
                width: '93vw',
                height: '30vh'
            },
            signature: {
                position: 'absolute',
                top: '76vh',
                left: '40vw',
                width: '40vw',
                height: '22vh'
            }
        };

        return style;
    },

    //---------------------------------------------------------------------------
    // Render
    //---------------------------------------------------------------------------

    render: function() {
        
        var {...other} = this.props;
        var style = this.style();

        return (
        <section id="content-container-home" style={style.section}>
            <img style={style.one} src="/assets/ContentContainerHome/1.jpg" />
            <img style={style.two} src="/assets/ContentContainerHome/2.jpg" />
            <img style={style.three} src="/assets/ContentContainerHome/3.jpg" />
            <img style={style.four} src="/assets/ContentContainerHome/4.jpg" />
            <img style={style.five} src="/assets/ContentContainerHome/5.jpg" />
            <img style={style.signature} src="/assets/ContentContainerHome/signature.jpg" />
        </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(ContentContainerHome);