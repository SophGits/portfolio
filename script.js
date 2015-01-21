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
   $('.test2').html('screenwidth: ' + sw);



  // function createYTEvent(frameID, identifier){
  //   console.log(this);
  //   console.log(frameID);
  //   console.log(identifier);
  // }


}); // DOM Content Loaded




window.onload = function(){
  var checkSize = function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('body').addClass('mobile');
    } else if (effectiveDeviceWidth <= 760) {
       $('body').addClass('mobile');
    } else if (window.innerWidth > 760) {
       $('body').removeClass('mobile');
    }
  }
  checkSize();
  var w = window.innerWidth;
  $('.test').html('innerwidth: ' + w);



  $('.example').click(function(){
    var iframes = $('iframe');
    for (var i=0; i<iframes.length; i++){
      var iframe = iframes[i].contentWindow;
      iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  });

  var effectiveDeviceWidth = function() {
    var deviceWidth = window.orientation == 0 ? window.screen.width : window.screen.height;
    // iOS returns available pixels, Android returns pixels / pixel ratio
    // http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
    if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
      deviceWidth = deviceWidth / window.devicePixelRatio;
    }
    $('.test3').html('devicewidth: ' + deviceWidth);
    return deviceWidth;
  }
  effectiveDeviceWidth();

  window.onresize = function(){
    checkSize();
    var w = window.innerWidth;
    $('.test').html('innerwidth: ' + w);

    // in phone width, detach iframe and append to current selection
    $('.left ul li').on('click', '.example', function(e){
      var name = this.id;
      if(effectiveDeviceWidth() < 800){
        name = "." + name;
        var video = $('iframe').siblings(name)[0];
        video = $(video).detach();
        $(this).append(video);
      }
    })
  }

} // window onload

