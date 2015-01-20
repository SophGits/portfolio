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
}

window.onresize = function(){
  checkSize();
  var w = window.innerWidth;
  $('.test').html(w);
}
