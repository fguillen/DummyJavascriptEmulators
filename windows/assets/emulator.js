$(function() {

  $('#loading a').click(function() {
      $('#loading a').fadeOut(1000, function() {
        $('#loading').fadeOut(500);
      }
    );
    return false;
  });
  
  $('#windows').click(function() {
    $('#windows').hide();
  });
  
});