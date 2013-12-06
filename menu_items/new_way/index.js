if (Meteor.isClient) {
  Template.menu.helpers({

    items:function  () {
      return ['One','Two','Three','Four']
    },

    selectedItem: function  () {
      return Session.get("selectedItem")
    }

  });

  Template.menu_item.events({
    'click a' : function (e,tmpl) {
      e.preventDefault();
      Session.set("selectedItem",this.valueOf())
    }
  });

  Template.menu_item.helpers({
    itemClass:function  () {
      return Session.equals("selectedItem",this.valueOf())? "selected": ""
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
