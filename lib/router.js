Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
  	return Meteor.subscribe('films');
  }
});

Router.map(function() {
  this.route('filmsList', {path: '/'});
});