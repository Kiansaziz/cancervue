

// SCROLL HEADER

$(window).scroll(function() {

var scroll = $(window).scrollTop();

if (scroll >= 100) {
  $(".navbar-default").addClass("darkHeader");
} else {
  $(".navbar-default").removeClass("darkHeader")
}
});


