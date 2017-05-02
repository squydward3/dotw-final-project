var petalsCaptionArray = $('.petals').toArray();
var moonCaptionArray = $('#moon_caption path').toArray();
var strokeCaptionArray = $('#stroke_caption path').toArray();

var delayInit = 0;
var delays =[];
for (var i=0; i<petalsCaptionArray.length; i++) {
  delays.push(delayInit);
  delayInit+=.1;
}


$(document).ready(function() {

  wHeight = $(window).height();
  picHeight = $('#bg').height();
  petalsHeight = $('#petals').height();

  //init posit bg
  $('#bg').css({
    'margin-top': (wHeight-picHeight)/2,
    'display': 'block'
  });

  //resize bg
  $(window).resize(function() {
    $('#bg').css('margin-top', (wHeight-picHeight)/2)
  })

  //caption
  caption('petals', petalsCaptionArray)
  caption('moon', moonCaptionArray)
  caption('stroke', strokeCaptionArray)

})

function caption(obj, captionarray) {
  $('#'+obj+'').hover(function() {
    for (var i=0; i<captionarray.length; i++) {
      captionarray[i].style.animation = 'fadeInCaption .1s forwards',
      captionarray[i].style.animationDelay = delays[i]+'s'
    }
  }, function() {
    for (var i=0; i<captionarray.length; i++) {
      captionarray[i].style.animation = 'fadeOutCaption .1s forwards',
      captionarray[i].style.animationDelay = delays[i]+'s'
    }
  });


}
