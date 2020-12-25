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

/* user input contactform double-check*/
document.querySelector("#FormContact").addEventListener("submit", function (e) {
  e.preventDefault();
  SubmitContactForm();
});

function SubmitContactForm() {
  /* User input */
  let contact_form = {
    Nom: $("#Nom").val(),
    Prenom: $("#Prenom").val(),
    Mobile: $("#Mobile").val(),
    Email: $("#Email").val(),
    Objet: $("#Objet").val(),
  };
  /*Double_check user input*/
  var regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    atpos = contact_form.Email.indexOf("@"),
    dotpos = contact_form.Email.lastIndexOf("."),
    close = document.getElementById("close"),
    modal_container = document.getElementById("modal-container");
  $(".nom ,.prenom ,.mobile ,.email , .objet").removeClass("show");
  if (contact_form.Nom == "") {
    $(".nom").addClass("show");
    return false;
  } else if (contact_form.Prenom == "") {
    $(".prenom").addClass("show");
    return false;
  } else if (regphone.test(contact_form.Mobile) == false) {
    $(".mobile").addClass("show");
    return false;
  } else if (atpos < 1 || dotpos - atpos < 2) {
    $(".email").addClass("show");
    return false;
  } else if (contact_form.Objet == "") {
    $(".objet").addClass("show");
    return false;
  } else {
    modal_container.classList.add("show");
    body.classList.add("stop-scrolling");
    close.addEventListener("click", () => {
      window.location = "./contactform.php";
      modal_container.classList.remove("show");
      body.classList.remove("stop-scrolling");
      document.querySelector("#FormContact").reset();
    });
  }
}
/*animation on scroll*/
var ratio = 0.1;
var options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

var handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r);
});
