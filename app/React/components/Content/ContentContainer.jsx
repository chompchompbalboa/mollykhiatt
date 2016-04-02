
//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var React = require('react');
var Radium = require('radium');

var ContentContainerHome = require('./ContentContainerHome.jsx');

//-----------------------------------------------------------------------------
// Module
//-----------------------------------------------------------------------------
var ContentContainer = React.createClass({
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

    container: function(content, component) {
        var contents = [];
        contents.push(
            React.createElement(
                eval(component), 
                {
                    key: component,
                    content: content,
                    handleChangeContent: this.props.handleChangeContent
                }
            )
        );
        return contents;
    },

    //---------------------------------------------------------------------------
    // Handles
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    // Style
    //---------------------------------------------------------------------------

    style: function() {
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
        
        var {content, ...other} = this.props;
        var style = this.style();
        var container = this.container(content, content.display.container);

        return (
        <section id="content-container" style={style.section}>
            {container}
        </section>
        )
    }
    
});
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = Radium(ContentContainer);