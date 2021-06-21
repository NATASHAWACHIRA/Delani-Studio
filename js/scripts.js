$(document).ready(function() {
  $(".image_design").click(function() {
    $(".image_design").fadeOut();
    $(".designs").fadeIn();
  });
});
 $(".designs").click(function(){
   $(".designs").fadeOut();
   $(".image_design").fadeIn();
 });
});
