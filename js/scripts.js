$(document).ready(function() {
  let animationSpeed = 500;
  let padding = 0;

  $('img').on('dragstart', function(event) { event.preventDefault(); });

  $('#start').click(function() {
    $("img#free").removeClass("hidden");
    $("img#caught").addClass("hidden");
  });

  $("#easy").click(function() {
    animationSpeed = 500;
    $("img#free").css("padding", "0px");
  });

  $("#normal").click(function() {
    animationSpeed = 350;
    $("img#free").css("padding", "50px");
  });

  $("#hard").click(function() {
    animationSpeed = 250;
    $("img#free").css("padding", "100px");
  });

  $("img#free").mouseenter(function() {
    let height = Math.floor(Math.random() * ($(window).height() - $(this).height()));
    let width = Math.floor(Math.random() * ($(window).width() - $(this).width()));

    $(this).animate({
      top: height,
      left: width
    }, animationSpeed, function() {}
    );
  });

  $("img#free").click(function(){
    $("img#free").addClass("hidden");
    $("img#caught").removeClass("hidden");
  })
});