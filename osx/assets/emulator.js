$(function() {

  $('#loading a').click(function() {
      $('#loading a').fadeOut(1000, function() {
        $('#loading').fadeOut(500);
      }
    );
    return false;
  });
  
  $('#windows').click(function(e) {
    $("#spinner").show();
    spinnerToCursor( e );
    $('#windows').css( { cursor : 'none' } );
    $('#windows').addClass("with-spinner");
  });
  
  $('.with-spinner').live('mousemove', function(e){
    spinnerToCursor( e );
  });
  
  function spinnerToCursor(e){
    $('#spinner').css({
       left:  e.pageX - 16,
       top:   e.pageY - 16 
    });
  }
  
});