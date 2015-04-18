(function(){

  "use strict"

  var React  = require("react")

  var Frame = React.createClass({

    // getInitialState: function() {
    //   // wait
    // },

    // componentDidMount: function() {
    //   // wait
    // },

    render: function() {
      return (
        <div>hello</div>
      )
    }

  });

  React.render(
    <Frame/>,
    document.getElementById('frame')
  );

  module.exports = Frame;

})();