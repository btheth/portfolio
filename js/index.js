function isScrolledIntoView(elem) {
  var docViewTop = $(document).scrollTop();
  var docViewBottom = docViewTop + $(document).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >=      docViewTop));
}

$( document ).ready(function() {
  
  if ($(window).width() < 600) {
    $(".dropdown").css("display","inline-block");
    $(".nav-btn-wrapper").css("display","none");
  } else {
    $(".dropdown").css("display","none");
    $(".nav-btn-wrapper").css("display","inline-block");
  }
  
  if ((isScrolledIntoView($("#top-section")))) {
    $("#closed-navbox").css("display","flex");
    $("#navbox").css("display","none");
  } else {
    $("#closed-navbox").css("display","none");
    $("#navbox").css("display","flex");
  }
  
  $(window).on('resize', function(){
    var win = $(this);
    if (win.width() < 600) { 
      $(".dropdown").css("display","inline-block");
      $(".nav-btn-wrapper").css("display","none");
    } else {
      $(".dropdown").css("display","none");
      $(".nav-btn-wrapper").css("display","inline-block");
    }
  });
  
  $(window).scroll(function() {
    $("#closed-navbox").addClass('animated');
    
    if ((isScrolledIntoView($("#top-section")))) {
      $("#closed-navbox").css("display","flex");
      $("#navbox").css("display","none");
    } else {
      $("#closed-navbox").css("display","none");
      $("#navbox").css("display","flex");
    }
  });
  
});