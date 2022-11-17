function myFunction() {
    let x = document.getElementById("mob-nav-links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}