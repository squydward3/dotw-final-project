var ripples = $('.ripple').toArray();
var rippleDelayInitial = 6;
var rippleDelay = [];
for (var i=0; i<ripples.length; i++) {
  rippleDelay.push(rippleDelayInitial)
  rippleDelayInitial+=.5;
}

var mountains = $('.mountain').toArray();
var mountainSpeeds = [2.5, 2, 1.25, 1];
var waves = $('.wave').toArray();
var waveSpeeds = [2.5, 3, 1.75, 1.5, 1, 1];


$(document).ready(function() {
  $(window).on('scroll', scrollAnimate);
})

function scrollAnimate() {

  var scrollTop = $(window).scrollTop();
  var wHeight = $(window).innerHeight();
  var percentageComplete = (scrollTop /($('html').height() - wHeight)) * 100;


                                      ////////////// SCENE1 //////////////
  $('#moon').css('transform', 'translateY(-'+scrollTop/3.5+'px) rotate('+scrollTop/2+'deg)')

  //mountain
  for (var i=0; i<mountains.length; i++) {
    mountains[i].style.transform = 'translateY(-'+scrollTop/mountainSpeeds[i]+'px)'
  }
  // $('#mountain1').css('transform', 'translateY(-'+scrollTop/2+'px)')
  // $('#mountain2').css('transform', 'translateY(-'+scrollTop/1.75+'px)')
  // $('#mountain3').css('transform', 'translateY(-'+scrollTop+'px)')
  // $('#mountain4').css('transform', 'translateY(-'+scrollTop/1.25+'px)')

  waves
  for (var i=0; i<waves.length; i++) {
    waves[i].style.transform = 'translateY(-'+scrollTop/waveSpeeds[i]+'px)'
  }

  // $('#wave1').css('transform', 'translateY(-'+scrollTop/3+'px)')//curled big
  // $('#wave3').css('transform', 'translateY(-'+scrollTop+'px)')//curled middle
  // $('#wave4').css('transform', 'translateY(-'+scrollTop/1.5+'px)')//sandwich
  // $('#wave2').css('transform', 'translateY(-'+scrollTop/1.75+'px)')//way back
  // $('#wave5').css('transform', 'translateY(-'+scrollTop+'px)')//front
  // $('#wave6').css('transform', 'translateY(-'+scrollTop/2.5+'px)')//tiny

                                      ////////////// SCENE2 //////////////
  //clouds
  $('#cloud1').css('transform', 'translateX('+scrollTop/1.5+'px)')
  $('#cloud2').css('transform', 'translateX(-'+scrollTop/2+'px)')
  $('#cloud3').css('transform', 'translateX(-'+scrollTop/3+'px)')


  //RISE
  rise('mountain5', 200);
  rise('mountain6', 100);
  rise('sun', 100);
  function rise(obj, diff) {
    var offset = $('#'+obj+'').offset().top;
    if (scrollTop > offset-wHeight+diff) {
      $('#'+obj+'').css({
        'opacity': 1,
        'transform': 'translateY(0px)',
        'transition': 'transform .75s'
      })
    }
  }

  // leaf
  if (percentageComplete >= 100) {
    setTimeout(function() {
      $('#leaf').css({
        'display': 'block',
        'animation': 'leafFall 15s linear forwards'
      })
      //ripples
      for (var i=0; i<ripples.length; i++) {
        ripples[i].style.animation = 'ripple 1s linear forwards',
        ripples[i].style.animationDelay = rippleDelay[i]+'s'
      };
    }, 500)
  }

}//close scroll Animate
