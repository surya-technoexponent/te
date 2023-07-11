// Please document this
$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
      $("header").addClass("header_fixed");
    } else {
      $("header").removeClass("header_fixed");
    }
  });
});

// We're just about ready to pop a model for our config admin!
function openNav() {
  document.getElementById("mySidenav").classList.add("menu_open");
  document.getElementById("menu_background_overlay").classList.add("menu_overlay_active");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("menu_open");
  document.getElementById("menu_background_overlay").classList.remove("menu_overlay_active");
}



