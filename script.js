
document.addEventListener("DOMContentLoaded", () => {
    const landingText = document.querySelector(".landing-text");

    // Trigger the animation after a slight delay
    setTimeout(() => {
        landingText.classList.add("active");
    }, 500); // Delay in milliseconds (500ms)
});
