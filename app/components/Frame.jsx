(function(){

  "use strict"

  var React  = require("react"),
      tracks = require("services/tracks"),
      Player = require("./Player"),
      util   = require("util/util")

  var Frame = React.createClass({

    getInitialState: function() {
      return {
        track: {}
      }
    },

    componentDidMount: function() {
      (function(_this) {
        tracks.get().then(function (tracks) {
          var index   = util.random(0, tracks.length-1);
          _this.setState({track: tracks[index]})
        })
      })(this)
    },

    render: function() {
      return (
        <Player track={this.state.track}></Player>
      );
    }

  });

  React.render(
    <Frame/>,
    document.getElementById('frame')
  );

  module.exports = Frame;

})();