config = require("config/api")

class Tracks

  @get:(q)->
    q.limit = 200
    q.type  = "public"
    q.bpm   = { from: q.bpm, to: q.bpm }
    q.q     = q.artist
    delete q.artist
    return new Promise (resolve, reject) ->
      SC.get '/tracks', q , (tracks) ->
        if tracks.errors
          message = (tracks.errors.map (error) => error.error_message).join(",")
          reject Error(message)
        else
          resolve(tracks)


module.exports = Tracks