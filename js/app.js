$(document).ready(function() {
  var date = new Date();
  $('.date').html(date.getDate() + '/'+(date.getMonth() + 1)+'/'+date.getFullYear());
});
