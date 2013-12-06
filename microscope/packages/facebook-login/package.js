Package.describe({
  summary: 'Custom facebook login'
});

Package.on_use(function (api) {
  api.use(['accounts-base','accounts-facebook'], ['client', 'server']);
  api.use('bootstrap', ['client']);
  api.use('templating', 'client');
  api.use('handlebars', 'client');
  api.use('jquery', 'client');

  api.add_files('config.js','server') 
  api.add_files(['facebook_login.html','facebook_login.js'],'client')
});

Package.on_test(function (api) {
  
});
