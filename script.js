document.addEventListener("DOMContentLoaded", function(event) {

$('li div').on('click', function(){
  $('li div').removeClass('selected');
  $(this).addClass('selected');
  var name = $(this).attr('id');

  var iframes = $('iframe');
  $.each(iframes, function(i, v){
    $(this).removeClass('hide').addClass('hide');
        // $(this).stopVideo();
  })

  if(name !==''){

    var namelength = name.length;

    $('iframe').filter(function (){
      var classes = $(this).attr('class').split(' ');
      for (var i=0; i<classes.length; i++){
        if (classes[i].slice(0, namelength) === name){
          $(this).removeClass('hide');
          return true;
        }
      }
      console.log('false');
      return false;
    });

  } else {
    console.log('no matching video or content');
  }

  });

   var w = window.innerWidth;
   $('.test').html(w);
   var sw = screen.width;
   $('.test2').html(sw);



  // function createYTEvent(frameID, identifier){
  //   console.log(this);
  //   console.log(frameID);
  //   console.log(identifier);
  // }


}); // DOM Content Loaded


var checkSize = function(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').addClass('mobile');
  } else if (window.innerWidth <= 760) {
     $('body').addClass('mobile');
  } else if (window.innerWidth > 760) {
     $('body').removeClass('mobile');
  }
}


window.onload = function(){
  checkSize();
  var w = window.innerWidth;
  $('.test').html(w);


  function effectiveDeviceWidth() {
    var deviceWidth = window.orientation == 0 ? window.screen.width : window.screen.height;
    // iOS returns available pixels, Android returns pixels / pixel ratio
    // http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
    if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
      deviceWidth = deviceWidth / window.devicePixelRatio;
    }
    $('.test3').html(deviceWidth);
  }


}

window.onresize = function(){
  checkSize();
  var w = window.innerWidth;
  $('.test').html(w);
}
