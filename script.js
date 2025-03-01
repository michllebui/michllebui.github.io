
document.addEventListener("DOMContentLoaded", () => {
    const landingText = document.querySelector(".landing-text");

    setTimeout(() => {
        landingText.classList.add("active");
    }, 200);
});

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("desktop-nav").style.top = "0";
  } else {
    document.getElementById("desktop-nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}