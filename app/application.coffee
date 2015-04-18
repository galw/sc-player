config = require("config/api")
tracks = require("services/tracks")
util   = require("util/util")
Frame = require("components/Frame")

class App

  constructor:->
    @connect()
    tracks.get(artist: "sia").then (tracks) ->
      index   = util.random(0, tracks.length-1)
      track   = tracks[index]
      SC.stream "/tracks/#{track.id}", (sound) ->
        sound.setVolume(70)
        sound.play()

        window.a = sound

  connect:->
    SC.initialize client_id: config.client_id


new App