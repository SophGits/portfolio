document.addEventListener("DOMContentLoaded", function(event) {

  var videos = {
    kusiri: 'http://www.youtube.com/embed/qiaZ8S7amS4',
    outstanding: 'http://www.youtube.com/embed/zJ-4muRmqBM'
  }

  $('li div').on('click', function(){
    $('li div').removeClass('selected');
    $(this).addClass('selected');
    var id = $(this).attr('id');
    var videoSrc = videos[id];
    if(videoSrc){
      $('iframe').attr('src', videoSrc);
    } else {
      $('.right').html('<p style="text-align:center; margin-top: 10%;">There is no video</p>');
    }
  });

});