# Set up a collection to contain player information. On the server,
# it is backed by a MongoDB collection named "colors".
Colors = new Meteor.Collection("colors")
if Meteor.isClient
  Template.colors.colors = ->
    Colors.find {},
      sort:
        score: -1
        name: 1


  Template.colors.selected_color = ->
    color = Colors.findOne(Session.get("selected_color"))
    color and color.name

  Template.color.selected = ->
    "selected" if Session.equals("selected_color", @_id)

  Template.colors.events "click input.inc": ->
    Colors.update Session.get("selected_color"),
      $inc:
        score: 5


  Template.color.events click: ->
    Session.set "selected_color", @_id


# On server startup, create some colors if the database is empty.
if Meteor.isServer
  Meteor.startup ->
    if Colors.find().count() is 0
      colors = ["Blue", "Green", "Yellow", "Red", "Orange"]
      for color in colors
        Colors.insert 
          name:color, 
          class:name.toLowerCase(), 
          score: Math.floor(Random.fraction() * 10) * 5
