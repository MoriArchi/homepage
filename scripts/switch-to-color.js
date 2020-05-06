function switchToColor(color) {
    try {
        document.querySelectorAll(".page").forEach(function(page) {
            page.style.borderColor = color;
        });
        document.querySelectorAll(".avatar").forEach(function(avatar) {
            avatar.contentDocument.getElementById("circle").setAttribute("fill", color);
        });
    } catch (error) {}
}
window.onload = () => {
    document.getElementById("brown").addEventListener("click", switchToColor.bind(this, "brown"));
    document.getElementById("cyan").addEventListener("click", switchToColor.bind(this, "cyan"));
}
