document.addEventListener("DOMContentLoaded", function(event) {

  // add a seledcted class to an example
  $('li div').on('click', function(){
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
  var positionVideos = function(){
     // in phone width, detach iframe and append to current selection
    $('.left ul li').on('click', '.example', function(e){
      var name = this.id;
      name = "." + name;
      var video = $('iframe').siblings(name)[0];
      if($('body').hasClass('mobile')){
        video = $(video).detach();
        $(this).append(video);
        return
      } else {
        //         video = $(video).detach();
        // putBack(video);
      }
    });
    // var putBack = function(video){
    //   $('.right').append(video);
    //   console.log('should put back video');
    // }
  }
  var checkSize = function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').removeClass('mobile').addClass('mobile');
    } else if (window.innerWidth <= 760) {
       $('body').removeClass('mobile').addClass('mobile');
    } else if (window.innerWidth > 760) {
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

  window.onresize = function(){
    var w = window.innerWidth;
    $('.test').html('innerwidth: ' + w);
    checkSize();
  }

  checkSize();
  effectiveDeviceWidth();
} // window onload

