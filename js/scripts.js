let animationSpeed = 500;
let padding = 0;
let score = 0;

$(document).ready(function() {
  $('img').on('dragstart', function(event) { event.preventDefault(); });

  $('#start').click(function() {
    $("img#free").removeClass("hidden");
    $("img#caught").addClass("hidden");
    let sound = new Audio("audio/start.wav");
    sound.play();
  });

  $("#easy").click(function() {
    setDifficulty(0, 500);
  });

  $("#normal").click(function() {
    setDifficulty(50, 350);
  });

  $("#hard").click(function() {
    setDifficulty(100, 250);
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
    score++;
    $("#score").text(score);
    let sound = new Audio("audio/catch.wav");
    sound.play();
  })
});

function setDifficulty(padding, speed) {
  animationSpeed = speed;
  $("img#free").css("padding", padding + "px");
  let sound = new Audio("audio/click.wav");
  sound.play();
}