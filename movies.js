if (Meteor.isClient) { 
  
  Session.set('score-slider-min', '8.5');
  Session.set('score-slider-max', '9.5');
  Session.set('year-slider-min', '2000');
  Session.set('year-slider-max', '2013');
  
  Meteor.Router.add({
    '/tt*': 'movie',
    '*': 'not_found'
  });
  
  Template.body.helpers({
    layoutName: function() {
      switch (Meteor.Router.page()) {
        case 'movie':
          return 'single-movie';
        default:
          return 'home';
      }
    }
  });
  

  
  Template.birim_eleman.moviesLoaded = function () {
    return Session.get('moviesLoaded');
    
  };
  

  
  Meteor.subscribe('movies', function onComplete() {
    Session.set('moviesLoaded', true);
  });
 
  Template.birim_eleman.item = function(){
    return Movies.find({"userRating": {$gt:Session.get('score-slider-min'), $lt:Session.get('score-slider-max')},
                        "date"      : {$gt:Session.get('year-slider-min'), $lt:Session.get('year-slider-max')}
                       }, {limit:10}).fetch();
  };


  
  /*Template.single-movie.item = function(){
    return Movies.findOne({_id:'tt0120737'});
  };*/
   
  Template.enginemode.events({
    'click': function () {
      Session.set('score-slider-min', $('#score-slider').data('slider').getValue()[0].toString());
      Session.set('score-slider-max', $('#score-slider').data('slider').getValue()[1].toString());
      Session.set('year-slider-min', $('#year-slider').data('slider').getValue()[0].toString());
      Session.set('year-slider-max', $('#year-slider').data('slider').getValue()[1].toString());
    }
  }); 
  
   /*Template.enginemode.events({
    'click a': function () {
      Session.set('single-movie', this._id);
    }
  });*/

  
}
