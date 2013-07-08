if (Meteor.is_client) {
  Meteor.startup(function() {
    // so you can know if you've successfully in-browser browsed
    console.log('Started at ' + location.href);
  });

  Meteor.Router.add({
    '/': 'home',
    '/explore1': 'explore1',
    '/about': 'about',
	'/seen': 'seen',
	'/watchlist': 'watchlist',
	'/liked': 'liked',
	'/rated': 'rated',
    '/torate': 'torate',
	'/singlemovie': 'singlemovie'
  });
}
