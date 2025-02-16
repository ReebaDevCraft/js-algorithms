// Create the button element
const scrollButton = document.createElement("button");
scrollButton.innerText = "↑ Top";
scrollButton.id = "scrollToTop";
document.body.appendChild(scrollButton);

// Show button when user scrolls down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Scroll to top smoothly when clicked
scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
