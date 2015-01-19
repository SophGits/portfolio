document.addEventListener("DOMContentLoaded", function(event) {

  // var videos = {
  //   kusiri: 'http://www.youtube.com/embed/qiaZ8S7amS4',
  //   outstanding: 'http://www.youtube.com/embed/zJ-4muRmqBM',
  //   comicreader: 'http://www.youtube.com/embed/jBeZjb68eks'
  // }

  // $('li div').on('click', function(){
  //   $('li div').removeClass('selected');
  //   $(this).addClass('selected');
  //   var id = $(this).attr('id');
  //   var videoSrc = videos[id];
  //   if(videoSrc){
  //     $('iframe').removeClass('hide').attr('src', videoSrc);
  //     $('.right p').removeClass('hide').addClass('hide');
  //   } else {
  //     $('iframe').removeClass('hide').addClass('hide');
  //     $('.right p').removeClass('hide');
  //   }
  // });


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





  // function createYTEvent(frameID, identifier){
  //   console.log(this);
  //   console.log(frameID);
  //   console.log(identifier);
  // }



  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').addClass('mobile');
  }

}); // DOM Content Loaded

