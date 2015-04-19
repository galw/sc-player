(function(){

  "use strict"

  var React  = require("react"),
      tracks = require("services/tracks"),
      Player = require("./Player"),
      util   = require("util/util")

  var Frame = React.createClass({

    getInitialState: function() {
      return {
        track: {
          title: "",
          user: {
            username: ""
          }
        }
      }
    },

    getRandomTrack: function(e) {
      e.preventDefault();
      (function(_this) {
        tracks.get({tags: "happy, piano"}).then(function (tracks) {
          var index   = util.random(0, tracks.length-1);
          _this.setState({track: tracks[index]})
        })
      })(this)
    },

    render: function() {
      return (
        <div id="frame">
          <div id="header"></div>
          <div id="content">
            <a href="" onClick={this.getRandomTrack}>Pick Random Song</a>
          </div>
          <Player id="footer" track={this.state.track}></Player>
        </div>
      );
    }

  });

  React.render(
    <Frame/>,
    document.body
  );

  module.exports = Frame;

})();