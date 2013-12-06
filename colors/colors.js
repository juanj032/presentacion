// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Colors = new Meteor.Collection("colors");

if (Meteor.isClient) {
  Template.colors.colors = function () {
    return Colors.find({}, {sort: {score: -1, name: 1}});
  };

  Template.colors.selected_color = function () {
    var color = Colors.findOne(Session.get("selected_color"));
    return color && color.name;
  };

  Template.color.selected = function () {
    return Session.equals("selected_color", this._id) ? "selected" : '';
  };

  Template.colors.events({
    'click input.inc': function () {
      Colors.update(Session.get("selected_color"), {$inc: {score: 5}});
    }
  });

  Template.color.events({
    'click': function () {
      Session.set("selected_color", this._id);
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Colors.find().count() === 0) {
      var names = ["Blue",
                   "Green",
                   "Yellow",
                   "Red",
                   "Orange"];
      for (var i = 0; i < names.length; i++)
        Colors.insert({name: names[i], class:names[i].toLowerCase(), score: Math.floor(Random.fraction()*10)*5});
    }
  });
}
