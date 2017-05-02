
$(document).ready(function() {
  var wWidth = $(window).width();
  var wHeight = $(window).height();
  var px = 0;
  var paths = document.querySelectorAll('.path');
  var flag1 = false;
  var idle = 0;

  //delay arrays
  var delayInitial = 5;
  var delays=[];
  for (var i=2; i<paths.length; i++) {
    delays.push(delayInitial);
    delayInitial+=.5;
  }

    $(window).mousemove(function(e) {
      //base
      var x = e.clientX;
      var y = e.clientY;
      if ((y>wHeight*.5) && (x>px)) {
        $('#mountain .path').css('animation', 'drawMountain 5s linear forwards')
      } else {
        $('#mountain .path').css('animation-play-state', 'paused')
      }
      px = x;

      //when moutain finishes initializes others
      $("#mountain").on("animationend", function() {
        flag1 = true;
      });
      if (flag1==true) {
        $('#gate .path').css('animation', 'drawGate 8s linear forwards');
        //other elements
        for (var i=2; i<paths.length; i++) {
          $('.path').eq(i).css({
            'animation': 'drawElement 6s linear forwards',
            'animation-delay': delays[i]+'s'
          });
        }
      }
      //idle
      idle = 0;
    }); // close mouse move



  $('#righttree').on("animationend", function() {
    console.log('end');
     setInterval(function() {
       if (idle !=0) {
         for (var i=0; i<paths.length; i++) {
           $('.path').eq(i).css({
             'animation': 'retractStroke 15s linear forwards, dim 1s 14.5s linear forwards'
           });
         }
         $(window).off('mousemove');
       }
       idle+=1;
     }, 40000)
  });


  $(window).mousestop(function() {
    $('.path').css('animation-play-state', 'paused');

  });


}); //close document ready
