const scrollButton = document.createElement("button");
scrollButton.innerText = "↑ Top";
scrollButton.id = "scrollToTop";
document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
