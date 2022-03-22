$(document).ready(function() {
  $('#start').click(function() {
    $("img").removeClass("hidden");
  });

  $("img").click(function() {
    $("img").animate();
  });
});