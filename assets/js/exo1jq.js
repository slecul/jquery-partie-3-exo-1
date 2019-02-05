$(function() {
  var count = 0;
  $('#button').click(function() {
    count++;
    $('#text').val(count);
  });
});
