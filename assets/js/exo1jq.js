$(function() {
  var count = 0;
  $('#button').click(function() {
    count++;
    $('#text').text(count);
  });
});
