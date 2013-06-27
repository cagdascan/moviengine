Movies = new Meteor.Collection('movies');

if (Meteor.isClient) {  
  Template.slider.rendered = function ()
  {
    var slider1 = $('#year-slider').slider(
      {
          orientation:'horizontal',
          min: 1890,
          max: 2013,
          value: [1920, 2000]    
        }
      );
      var slider2 = $('#score-slider').slider(
        {
          orientation:'horizontal',
          min: 6,
          max: 10,
          step: 0.1,
          value: [7.5, 8.5]    
        }
      );
  };
}

if (Meteor.isClient) {  
  
  Template.birim_eleman.rendered = function() {
   $('a[rel=tooltip]').tooltip() //initialize all tooltips in this template
   $('span[rel=tooltip]').tooltip()

  };
}



if (Meteor.isServer) {  
  Meteor.publish("movies", function () {
    return Movies.find({ "userRating": { $gt: "8.5"}});
  });

}




