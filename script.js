let show_bar = document.getElementById("hidden-br");
let overlay = document.getElementById("overlay");
let cross = document.getElementById("cross");
let image_remove = document.getElementById("blur-image");
function toggleSidebar() {
    if (show_bar.style.display === "flex") {
        show_bar.style.display = "none";
        overlay.style.display = "none";
    }
    else {
        show_bar.style.display = "flex";
        overlay.style.display = "block";
        image_remove.style.display = "none";
    }
}
cross.onclick = function () {
    toggleSidebar();
    image_remove.style.display = "flex";
}
overlay.onclick = function () {
    image_remove.style.display = "flex";
    toggleSidebar();
}
// email show
function email_show() {
    alert("suyogpoudel458@gmail.com");
}