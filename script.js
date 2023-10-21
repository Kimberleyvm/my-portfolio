// cascading menu

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// read-more
function toggleAbout() {
    var content = document.getElementById("about-content");
    var btn = document.getElementById("toggle-btn");
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.innerHTML = "Lees minder";
    } else {
        content.style.display = "none";
        btn.innerHTML = "Lees meer";
    }
}
