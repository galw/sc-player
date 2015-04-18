(function(){

  "use strict"

  var React  = require("react");

  var Player = React.createClass({

    componentDidMount: function() {
      // this.play()
    },

    resume: function() {

    },

    pause: function() {

    },

    changeVolume: function() {

    },

    play: function() {
      SC.stream("/tracks/" + this.props.track.id, function (sound) {
        sound.play()
      })

    },

    render: function() {
      console.log("render player", this.props)
      return (
        <div>
          <div>{this.props.track.title}</div>
          <input type="button" onClick={this.play} value="play" />
        </div>
      );
    }

  });


  module.exports = Player;

})();