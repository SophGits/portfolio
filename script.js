document.addEventListener("DOMContentLoaded", function(event) {

  // add a selected class to an example
  // hide bg image
  $('li div').on('click', function(){
    $('.play-video-icon').css('display', 'none');
    $('li div').removeClass('selected');
    $(this).addClass('selected');
    var name = $(this).attr('id');

    var iframes = $('iframe');
    // hide all iframes
    $.each(iframes, function(i, v){
      $(this).removeClass('hide').addClass('hide');
    })
    // unhide iframe relating to clicked example
    if(name !=='' || name !== undefined || name !== 'undefined'){
      var namelength = name.length;
      $('iframe').filter(function (){
        var classes = $(this).attr('class').split(' ');
        for (var i=0; i<classes.length; i++){
          if (classes[i].slice(0, namelength) === name){
            $(this).removeClass('hide');
            return true;
          }
        }
        // console.log('false');
        // return false;
      });
    } else {
      console.log('no matching video or content');
      return
    }
  });

  // window & screen widths
  var w = window.innerWidth;
  $('.test').html('innerwidth: ' + w);
   var sw = screen.width;
  $('.test2').html('screenwidth: ' + sw);


}); // DOM Content Loaded


window.onload = function(){

  var putBack = function(){
    $('iframe').filter(function(i, v){
      $(v).hasClass('hide') ? console.log('true'): replace(this);
    });
    function replace(vid){
      var vid = $(vid).detach();
      $('.right').append(vid);
    }
    console.log('should put back video');
  }

  function resizeDirection(){
    $(window).data("old", {width: $(window).width()});
    $(window).resize(function(e) {
      var oldWidth = $(this).data("old").width;
      var newWidth = $(this).width();
        if(oldWidth <= 767 && newWidth > 767){
          console.log("crossing the threshhold");
          putBack();
        } else if(newWidth - oldWidth > 0){
          console.log("getting bigger")
        } else if(newWidth - oldWidth < 0){
          console.log("getting smaller")
        }
     $(window).data("old", {width: $(this).width()});
    });
  }
  resizeDirection();

  var positionVideos = function(bool){
     // in phone width, detach iframe and append to current selection
     var video;
    $('.left ul li').on('click', '.example', function(e){
      var name = this.id;
      name = "." + name;
      video = $('iframe').siblings(name)[0];
      if($('body').hasClass('mobile')){
        video = $(video).detach();
        $(this).append(video);
        return video;
      }
    });
  }

  var checkSize = function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').removeClass('mobile').addClass('mobile');
    } else if (window.innerWidth <= 767) {
       $('body').removeClass('mobile').addClass('mobile');
    } else if (window.innerWidth > 767) {
       $('body').removeClass('mobile');
    }
   positionVideos();
  }

  $('.example').click(function(){
    var iframes = $('iframe');
    for (var i=0; i<iframes.length; i++){
      var iframe = iframes[i].contentWindow;
      iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  });

  window.onresize = function(){
    var w = window.innerWidth;
    $('.test').html('innerwidth: ' + w);
    checkSize();
  }

  // var effectiveDeviceWidth = function() {
  //   var deviceWidth = window.orientation == 0 ? window.screen.width : window.screen.height;
  //   // iOS returns available pixels, Android returns pixels / pixel ratio
  //   // http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
  //   if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
  //     deviceWidth = deviceWidth / window.devicePixelRatio;
  //   }
  //   $('.test3').html('devicewidth: ' + deviceWidth);
  //   return deviceWidth;
  // }
  // effectiveDeviceWidth();

  checkSize();
} // window onload

