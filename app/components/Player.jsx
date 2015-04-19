(function(){

  "use strict"

  var React  = require("react"),
      Controls = require("components/Player/controls"),
      Scroller = require("components/Player/scroller");

  var Player = React.createClass({

    PLAY_STATE: {
      STOP: 0,
      PLAY: 1
    },

    componentWillReceiveProps: function(props) {
      this.stop()
      this.props = props
      this.stream()
    },

    componentDidUpdate: function(props, state) {
      if (this.state.sound) {
        this.play()
      }
    },

    getInitialState: function() {
      return {}
    },

    stream: function() {
      (function(_this){
        console.log("track to fetch:", _this.props.track.id)
        SC.stream("/tracks/" + _this.props.track.id, function (sound) {
          _this.setState({sound: sound})
        })
      })(this)
    },

    resume: function() {
      this.state.sound.resume()
    },

    stop: function() {
      console.log("stop", this.state)
      if(this.state.sound) {
        this.state.sound.stop()
      }
    },

    pause: function() {
      this.state.sound.pause()
    },

    changeVolume: function() {

    },

    play: function() {
      if(this.state.sound) {
        this.state.sound.play()
      }
    },

    togglePlay:function() {
      var sound = this.state.sound
      if (sound.playState === this.PLAY_STATE.STOP) {
        this.play()
      } else if(sound.paused) {
        this.resume()
      } else {
        this.pause()
      }

    },

    render: function() {
      return (
        <div id="playBar">
          <Controls />
          <Scroller />
          <div>Track is: {this.props.track.title}</div>
          <div>by: {this.props.track.user.username}</div>
          <div>bpm: {this.props.track.bpm}</div>
          <button onClick={this.togglePlay}>Play</button>
        </div>
      );
    }

  });


  module.exports = Player;

})();