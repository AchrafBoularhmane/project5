// Mobile nav bar// hide coordonee part //
var menu = document.getElementById("Menu"),
  menuoverlay = document.getElementById("menu-overlay"),
  body = document.getElementsByTagName("BODY")[0];
function toggle() {
  menu.classList.toggle("active");
  menuoverlay.classList.toggle("active");
  body.classList.toggle("stop-scrolling");
  cookies.classList.add("close");
}
function toggleoff() {
  menu.classList.remove("active");
  menuoverlay.classList.remove("active");
  body.classList.remove("stop-scrolling");
}
// Fixing nav bar on scroll //
var height = $("#home").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $("#Accueil").removeClass("active");
    $(".backToTop").addClass("top");
    $("header").addClass("fix-navbar");
  } else {
    $("#Accueil").addClass("active");
    $(".backToTop").removeClass("top");
    $("header").removeClass("fix-navbar");
  }
});
// Back to top //
$(document).ready(function () {
  $("#backTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// temoignage slider //
$(function () {
  $("#client-temoignage").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 1400,
    loop: true,
    autoPlayHoverPause: true,
  });
});
