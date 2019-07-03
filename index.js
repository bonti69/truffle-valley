$(".menu-icon").click(function(){
  $(".content").slideToggle();
  $(".menu-icon").hide();
  $(".fixed-bar").css("background","transparent");
});

$(".close-menu").click(function(){
  $(".content").slideToggle();
  $(".menu-icon").show(1000);
  $(".fixed-bar").css("background","linear-gradient(black , transparent)");
});

$(".second.header").hover(function(){
  // $(".white-layer").css("opacity",0);
  // $("h2").css("color","rgba(0,0,0,0.5)");
  $(".white-layer").animate({
    "opacity":"0"
  });
  $("h2").animate({
    "opacity":"0.3"});
    $(".second").animate({
      "background-size":"103%"},"slow");
  // $(".second").css('background-size', "110%");
},function(){
  // $(".white-layer").css("opacity",0.5);
  // $("h2").css("color","rgba(0,0,0,1)");
  $("h2").animate({
    "opacity":"1"
  });
  $(".white-layer").animate({
    "opacity":"0.5"
  });
  $(".second").animate({
    "background-size":"100%"});
  // $(".second").css('background-size', "100%");
});
