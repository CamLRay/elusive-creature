$(document).ready(function() {
  $('#start').click(function() {
    $("img").removeClass("hidden");
  });

  $("img").mouseenter(function() {
    const height = $(window).height() * .9;
    const width = $(window).width() * .9;

    $("img").animate({
      top: Math.floor(Math.random() * height),
      left: Math.floor(Math.random() * width)
    }, 250, function() {}
    );
  });
});