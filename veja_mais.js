document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-see-more");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.previousElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                button.textContent = "Veja Mais";
            } else {
                content.style.display = "block";
                button.textContent = "Veja Menos";
            }
        });
    });
});
