config = require("config/api")
tracks = require("services/tracks")


class App

  constructor:->
    @connect()
    Frame = require("components/Frame")


  connect:->
    SC.initialize client_id: config.client_id


new App