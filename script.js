// Wait for the document to fully load before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded!");

    // Example: Change text content on button click
    document.getElementById("changeTextBtn").addEventListener("click", function () {
        document.getElementById("message").textContent = "Text Updated!";
    });

    // Example: Fetch data from an API
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => console.log("Fetched Data:", data))
        .catch(error => console.error("Error fetching data:", error));
});

