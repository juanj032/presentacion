Accounts.loginServiceConfiguration.remove({service: "facebook"});


var getSetting = function  (setting) {
  if(! Meteor.settings[setting]){
    throw new Error("Missing setting " + setting)
  } 

  return Meteor.settings[setting]
}

Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: getSetting('FACEBOOK_APP_ID'),
  secret: getSetting('FACEBOOK_APP_SECRET')
});