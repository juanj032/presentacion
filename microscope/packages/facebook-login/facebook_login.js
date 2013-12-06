Template.userLoggedout.events({
    "click #login": function(e, tmpl){
        Meteor.loginWithFacebook({
          requestPermissions: []
        }, function(err) {
            if (err){
                console.error("Error while logging",err)
            }
        });
    }
});

Template.userLoggedin.events({
    "click #logout": function(e, tmpl) {
        Meteor.logout(function(err) {
            if(err) {
                console.error("Error while logging",err)
            }else {
                //show alert that says logged out
                //alert('logged out');
            }
        });
    }
});