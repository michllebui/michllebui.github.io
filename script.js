
document.addEventListener("DOMContentLoaded", () => {
    const landingText = document.querySelector(".landing-text");

    setTimeout(() => {
        landingText.classList.add("active");
    }, 200);
});
