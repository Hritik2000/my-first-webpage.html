$(document).ready(function() {
  $("button#contrastbutton").click(function() {
    $("body").addClass("high-contrast");
    $("button#revertbutton").fadeIn("fast");
    $("button#contrastbutton").fadeOut("fast");
});
});

$(document).ready(function() {
  $("button#revertbutton").click(function() {
    $("body").removeClass("high-contrast");
    $("button#contrastbutton").fadeIn("fast");
    $("button#revertbutton").fadeOut("fast");
  });
});
