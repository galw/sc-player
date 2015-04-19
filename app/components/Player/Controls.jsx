(function(){

  "use strict"

  var React  = require("react");

  var Controls = React.createClass({

    render: function() {
      return (
        <div>
          <div className="media-controls back"></div>
          <div className="media-controls play"></div>
          <div className="media-controls forward"></div>
        </div>
      );
    }
  });

  module.exports = Controls;

})();